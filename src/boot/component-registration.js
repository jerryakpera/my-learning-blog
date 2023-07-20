import { Icon } from "@iconify/vue";
import { SFacebook } from "vue-socials";
import ResponsiveText from "src/components/text-components/ResponsiveText.vue";
import ResponsiveLabel from "src/components/text-components/ResponsiveLabel.vue";
import ResponsiveHeading from "src/components/text-components/ResponsiveHeading.vue";

export default ({ app }) => {
  app.component("Icon", Icon);
  app.component("SFacebook", SFacebook);
  app.component("ResponsiveText", ResponsiveText);
  app.component("ResponsiveLabel", ResponsiveLabel);
  app.component("ResponsiveHeading", ResponsiveHeading);
};
