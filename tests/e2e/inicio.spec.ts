import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("la página de inicio carga y no tiene fallos de accesibilidad críticos ni serios", async ({ page }, testInfo) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  const { violations } = await new AxeBuilder({ page }).analyze();
  const graves = violations.filter((v) => v.impact === "critical" || v.impact === "serious");
  expect(graves, JSON.stringify(graves, null, 2)).toEqual([]);

  await page.screenshot({ path: `capturas/${testInfo.project.name}/inicio.png`, fullPage: true });
});
