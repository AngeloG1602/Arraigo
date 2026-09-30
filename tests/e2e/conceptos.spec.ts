import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

const CONCEPTOS = [
  { ruta: "/concepto-a", titular: "Vuelve a morder sin pensarlo.", momento: "[data-listo]" },
  { ruta: "/concepto-b", titular: "Antes de empezar, tu plan por escrito.", momento: "figure[data-listo]" },
];

/** Lleva el momento orquestado a su final para revisar el estado estable. */
async function esperarMomento(page: Page, selector: string) {
  await page.locator("h2").scrollIntoViewIfNeeded();
  await page.locator("figure").scrollIntoViewIfNeeded();
  await expect(page.locator(selector)).toBeAttached({ timeout: 10_000 });
}

for (const { ruta, titular, momento } of CONCEPTOS) {
  test.describe(ruta, () => {
    test("carga con el titular, los dos botones y sin fallos axe críticos ni serios", async ({ page }, testInfo) => {
      await page.goto(ruta);
      await expect(page.getByRole("heading", { level: 1, name: titular })).toBeVisible();
      await expect(page.getByRole("link", { name: "Agendar valoración" })).toBeVisible();
      await expect(page.getByRole("button", { name: "Escribir por WhatsApp" })).toBeVisible();

      await esperarMomento(page, momento);
      const { violations } = await new AxeBuilder({ page }).analyze();
      const graves = violations.filter((v) => v.impact === "critical" || v.impact === "serious");
      expect(graves, JSON.stringify(graves, null, 2)).toEqual([]);

      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({
        path: `capturas/${testInfo.project.name}${ruta}.png`,
        fullPage: true,
      });
    });

    test("en móvil los dos botones están en la primera pantalla", async ({ page }, testInfo) => {
      test.skip(testInfo.project.name !== "movil-390", "Solo aplica a 390 px");
      await page.goto(ruta);
      for (const boton of [
        page.getByRole("link", { name: "Agendar valoración" }),
        page.getByRole("button", { name: "Escribir por WhatsApp" }),
      ]) {
        await expect(boton).toBeInViewport({ ratio: 1 });
      }
    });

    test("el botón de WhatsApp muestra la ventana de demostración y se cierra con teclado", async ({ page }) => {
      await page.goto(ruta);
      await page.getByRole("button", { name: "Escribir por WhatsApp" }).click();
      const ventana = page.getByRole("dialog");
      await expect(ventana).toBeVisible();
      await expect(ventana).toContainText(
        "Hola, vengo de la web de Arraigo y quiero saber si soy candidato a implantes.",
      );
      await expect(ventana.getByRole("button", { name: "Entendido" })).toBeFocused();
      await page.keyboard.press("Enter");
      await expect(ventana).toBeHidden();
    });

    test.describe("con movimiento reducido", () => {
      test.use({ contextOptions: { reducedMotion: "reduce" } });

      test("el hero y el plan se ven completos sin animación", async ({ page }) => {
        await page.goto(ruta);
        await expect(page.getByRole("heading", { level: 1, name: titular })).toBeVisible();
        await expect(page.locator(momento)).toBeAttached();
        // Nada del momento queda oculto: todas las piezas animables están a opacidad 1.
        const opacidades = await page
          .locator("[data-pieza], [data-escrito], [data-sello]")
          .evaluateAll((nodos) => nodos.map((n) => getComputedStyle(n).opacity));
        expect(opacidades.length).toBeGreaterThan(0);
        expect(opacidades.every((o) => o === "1")).toBe(true);
        await expect(page.getByText("Total desde $4.200.000, pagado en tres momentos.")).toBeVisible();
      });
    });
  });
}
