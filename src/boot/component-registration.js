import { Icon } from "@iconify/vue";
import ResponsiveText from "src/components/text-components/ResponsiveText.vue";
import ResponsiveHeading from "src/components/text-components/ResponsiveHeading.vue";
import ResponsiveLabel from "src/components/text-components/ResponsiveLabel.vue";

export default ({ app }) => {
  app.component("Icon", Icon);
  app.component("ResponsiveText", ResponsiveText);
  app.component("ResponsiveHeading", ResponsiveHeading);
  app.component("ResponsiveLabel", ResponsiveLabel);
};
