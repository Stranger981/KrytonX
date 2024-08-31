var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

document.addEventListener('DOMContentLoaded', () => {
    const featuresWrapper = document.querySelector('.features-wrapper');

    for (let i = 0; i < 40; i++) {
        const blob = document.createElement('div');
        blob.classList.add('blob');
        blob.style.top = `${Math.random() * 100}%`;
        blob.style.left = `${Math.random() * 100}%`;
        blob.style.width = `${50 + Math.random() * 300}px`;
        blob.style.height = `${50 + Math.random() * 300}px`;
        blob.style.animationDuration = `${2 + Math.random() * 20}s`;
        blob.style.opacity = `${0.3 + Math.random() * 0.7}`;
        featuresWrapper.appendChild(blob);
    }
});

}
/*
     FILE ARCHIVED ON 09:27:32 Aug 04, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:33:53 Aug 08, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.727
  exclusion.robots: 0.033
  exclusion.robots.policy: 0.02
  esindex: 0.013
  cdx.remote: 6.573
  LoadShardBlock: 62.022 (3)
  PetaboxLoader3.datanode: 86.961 (5)
  load_resource: 1122.249 (2)
  PetaboxLoader3.resolve: 1091.45 (2)
*/