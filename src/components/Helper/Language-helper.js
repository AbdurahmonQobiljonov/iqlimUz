import { useTranslation } from "react-i18next";

function RenderCitys(item) {
  const { t } = useTranslation();
  return t(`citys.${item}`);
}
function RenderWeathers(item) {
  const { t } = useTranslation();
  return t(`main.${item}`);
}
function RenderInfo(item) {
  const { t } = useTranslation();
  return t(`infoMain.${item}`);
}
function RenderWeeks(item) {
  const { t } = useTranslation();
  return t(`weeks.${item}`);
}

export { RenderCitys, RenderInfo, RenderWeeks, RenderWeathers };
