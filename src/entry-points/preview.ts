import { PreviewWebComponent } from "@/preview/ctp-preview.component";

window.CrazyTeaParty ??= {
  // @ts-ignore
  version: VERSION,
  components: {},
};

window.CrazyTeaParty.components['ctp-preview'] = PreviewWebComponent;
