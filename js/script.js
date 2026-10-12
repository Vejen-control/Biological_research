/* Pen Data for all 12 pens */
const pens = {
  1: {name:"Creator Inspiration", desc:"The bright ideas of all creators provides the inspiration in this pen's design. It is very clean with solid metal look- all in a pocket size envelope. The pen has open bolt action mechanism with very distinctive 'click'. This makes the pen very noticeable even before you see the attractive metallic view and touch the smooth and clean surface of the excellent high quality anodized material. The main focal point on the grip is engraved with a small text below the anodising layer and a single groove provides ideal clean design above the grip area. The body is clean with highly visible reflective top and sparkly knurled top and bottom caps. This pen features metal Parker cartridge, which provides excellent ink flow. The 10mm diameter of the body feels comfortably solid, despite the weight of the entire pen is only 15g. Writing with this pen provides extraordinary feeling due to its unique clean design and solid structure.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort","Endcaps: Polished Reflective Finish","Limited edition","Weight: 15g","Length: 124mm","Grip diameter: 10mm","Cartridge type: Parker ballpen 0.5mm (blue) or similar","Engravings: Yes (middle of the handle)/Can be customised/"], images:["images/pen1.jpg","images/pen1_2.jpg","images/pen1_3.jpg","images/pen1_4.jpg"],video:"video/pen1.mp4"},
  2: {name:"Moon Lander", desc:"Inspired by America's first Moon Landing in 1969, the Moon Lander Pen is featuring very clean design, which resembles the Moon Rover, used for transportation of people and goods on the Moon. The distinguished reflective metal tip (when the pen is open) provides noticeable polished look and allows handling the pen in different positions comfortably. The clip of the pen preserves the ornaments of the futuristic nature and it is noticeable even when clipped on a coat or shirt.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 19g","Length: 147mm","Grip diameter: 10mm","Cartridge: Jinhao RUEFI REFILL 0.5mm (black)","Engravings: Yes (middle of the handle)/Can be customised/"],  images:["images/pen2.jpg","images/pen2_2.jpg","images/pen2_3.jpg","images/pen2_4.jpg"],video:"video/pen2.mp4"},
  3: {name:"Capsulon Orbitalis", desc:"Inspired by the sleek design of space capsules and crafted with precision in France, Capsulon Orbitalis is a celebration of innovation and timeless elegance. Each pen is meticulously handcrafted from premium anodized aluminium, featuring a knurled grip for comfort with polished reflective endcaps for a striking metallic look. The result is a comfortable pen that feels as extraordinary as it looks. Produced in limited editions, every Capsulon Orbitalis pen is a testament to exclusivity and artistry, designed for those who appreciate the finer details in life.", features:["Material: Anodized Aluminium","Grip: 22mm long, Knurled for Comfort","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 20g","Length: 144mm","Grip diameter: 10mm","Cartridge: Jinhao RUEFI REFILL 0.5mm (black)","Engravings: Yes (on top of the handle)/Can be customised/"],  images:["images/pen3.jpg","images/pen3_2.jpg","images/pen3_3.jpg","images/pen3_4.jpg"],video:"video/pen3.mp4"},
  4: {name:"Capsulon Elegant", desc:"Inspired by the sleek design of a space capsules and crafted with precision in France, Capsulon Elegant is a small grip version of Capsulon Orbitalis Pen. It preserves the timeless elegance of the distinguished features of orbital satellites. Each pen is handcrafted from premium anodized aluminium, featuring a knurled grip for comfort with polished reflective endcaps for a striking metallic look. The result - comfortable pen that feels extraordinary in a hand which prefers small grip diameter. Produced in limited edition, every Capsulon Elegant pen is representation of exclusive art and provides maximum comfort when writing with it.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 11g","Length: 144mm","Grip diameter: 7.6 mm","Cartridge: any 3mm standard cartridge with 2.3mm tip. Writing width: 0.5mm (black)","Engravings: Yes (on top of the handle)/Can be customised/"],  images:["images/pen4.jpg","images/pen4_2.jpg","images/pen4_3.jpg","images/pen4_4.jpg"],video:"video/pen4.mp4"},
  5: {name:"Reception Pen", desc:"This pen is specifically designed and optimised to be used in public spaces. The Reception pen has long body and allows both grips sizes (7.6mm and 10mm), which makes it suitable for different people. It features highly visible red rubber protection on the small grip diameter, which provides comfort when the metal is cold. The top of the pen features distinguished strong metallic tip with 3mm hole in case the pen has to be secured. The pen also comes with transparent polycarbonate pad, which would prevent it from rolling when on a flat surface.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 12g","Length: 147mm","Grip diameter: 7.6mm (lower 10mm)","Cartridge: any 3mm standard cartridge with 2.3mm tip","Engravings: No /Can be customised/"],  images:["images/pen5.jpg","images/pen5_2.jpg","images/pen5_3.jpg","images/pen5_4.jpg"],video:"video/pen5.mp4"},
  6: {name:"Saturn rings", desc:"Inspiration for this pen comes from the Saturn's rings. Slick design with hidden bolt pen action provides very comfortable usage with intuitive way to push and pull the cartridge. This pen does not have clip and the brass bolt is preventing the pen from rolling freely on a flat surface. The rings on the grip provide the necessary friction, so the pen is not sliding in your fingers. With its unusual unique design and clean shape this pen provides comfort and elegance.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort","Endcaps: Polished Reflective Finish","Limited Edition: Yes","Weight: 14g","Length: 136mm","Grip diameter: 7.6mm","Cartridge: any 3mm standard cartridge with 2.3mm tip","Engravings: No /Can be customised/"],  images:["images/pen6.jpg","images/pen6_2.jpg","images/pen6_3.jpg","images/pen6_4.jpg"],video:"video/pen6.mp4"},
  7: {name:"Selection GRIP - COMPANY PACK", desc:"Seven pens from our collection. Presented as COMPANY PACK, each pen is individually protected (in a box) and can be used as individual present. The purpose is to preserve the identity of each person in a group and at the same time to deliver new stylish look to anyone looking from outside.", features:["8 and 10mm body","Comfortable grip","Exclusive and limited edition","bolt and screw cap models combined"],  images:["images/pen7.jpg","images/pen7_2.jpg","images/pen7_3.jpg","images/pen7_4.jpg"],video:"video/pen7.mp4"},
  8: {name:"Astro High grip Pocket", desc:"Similarity with a space rockets makes it all. It accommodates striking features of a modular rocket packed in comfortable design. The pen has open bolt action mechanism with highly visible knurled grip in a small envelope, only 124mm long, which can fit in any pocket. The front and back screw caps are designed with knurling features, so the pen provides excellent grip friction. The mechanism has distinctive 'click' noise, which makes the pen's sound different than a standard top button pens. Fully developed from metal this pen has highly reflective stylish top section, which is visible from distance along with the ball used to extend the cartridge. The Parker cartridge inside guarantees stable flow of ink on different surfaces and contributes to the unique experience when writing.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 15g","Length: 124mm","Grip diameter: 10mm","Cartridge: Parker ballpen 0.5mm (blue) or similar","Engravings: No /Can be customised/"],  images:["images/pen8.jpg","images/pen8_2.jpg","images/pen8_3.jpg","images/pen8_4.jpg"],video:"video/pen8.mp4"},
  9: {name:"The Count of Monte Cristo", desc:"The Count of Monte Cristo Pen is inspired by the Alexandre Dumas adventures novel. With typical French/Italian ornaments this pen bring us to the era of the Bourbon Restoration through the reign of Louis-Philippe of France 1815-1839. After multiple adventures the character becomes fabulously wealthy, powerful and mysterious, Count of Monte Cristo enters the fashionable Parisian world of the 1830s to avenge himself. This pen delivers the exclusivity with mystical ornaments typical for nobles during 18th century. With its futuristic look and Parker pen cartridge which provides superior ink flow this pen will make you look special.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 15g","Length: 120mm / 135mm when cap screwed on the back","Grip diameter: 10mm","Cartridge type: Parker ballpen 0.5mm (blue) or similar","Engravings: NO /Can be customised/"], images:["images/pen9.jpg","images/pen9_2.jpg","images/pen9_3.jpg","images/pen9_4.jpg"],video:"video/pen9.mp4"},
  10:{name:"Aurelian Quill", desc:"Made with precision from anodised aluminium, the Aurelian Quill embodies the timeless elegance of the 18th century with intricate knurled engravings that whisper of a bygone era. Its ultra-slim 7.6mm body delivers a refined writing experience, balancing modern minimalism with historical grandeur. The meticulously crafted screw-on cap ensures seamless functionality, securing to the back for effortless use. Designed for those who appreciate both artistry and engineering, this pen carries a 3mm cartridge, offering an unbroken flow of thought onto the page. The Aurelian Quill is not just a writing instrument—it is a statement of legacy, precision, and inspiration. The name is inspired by'Aurelia', which evokes the grandeur of the 18th century, referencing emperors, golden craftsmanship, and timeless elegance.'Quill' ties it to the art of writing, reminiscent of an era when letters and manuscripts were created with care and sophistication.", features:["Material: Anodized Aluminium","Grip: Gently Knurled for Comfort","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 8g","Length: 125mm / 130mm when cap screwed on the back","Grip diameter: 7.6mm","Cartridge type: Parker ballpen 0.5mm (blue) or similar","Engravings: NO /Can be customised/"],  images:["images/pen10.jpg","images/pen10_2.jpg","images/pen10_3.jpg","images/pen10_4.jpg"],video:"video/pen10.mp4"},
  11:{name:"Lumiere Bolt", desc:"Crafted in France with precision and artistry, the Lumière Bolt is a masterpiece of design and function. Its 133mm aluminum body is adorned with four striking knurled lines, offering visual brilliance and a confident grip. The seamless bolt-action mechanism, controlled by a polished metal ball, delivers an effortless writing experience. A gleaming rounded top adds a touch of refinement, while the Parker cartridge ensures every word flows with precision and grace. More than just a pen, the Lumière Bolt is a statement of craftsmanship, innovation, and timeless style.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort with 4 stripes","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 15g","Length: 133mm","Grip diameter: 10mm","Cartridge type: 3mm standard (blue) or similar","Engravings: NO /Can be customised/"],  images:["images/pen11.jpg","images/pen11_2.jpg","images/pen11_3.jpg","images/pen11_4.jpg"],video:"video/pen11.mp4"},
  12:{name:"The Diplomat", desc:"The Diplomat Aluminum Pen is a masterpiece of precision engineering, combining elegance with functionality. Crafted from high-grade aluminum, it maintains the brand’s signature knurled design, ensuring both aesthetic consistency and superior grip. Three finely knurled rings around the handle provide enhanced control and a comfortable writing experience. Equipped with a high-quality bolt-action mechanism, the pen operates smoothly with a satisfying click, reinforcing its durability and reliability. A subtle engraving near the handle adds a touch of refinement, making it not just a writing tool but a statement of craftsmanship. Perfectly balanced and lightweight, the Diplomat Aluminum Pen is designed for those who appreciate both style and performance.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort with 3 stripes","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 17g","Length: 133mm","Grip diameter: 10mm","Cartridge type: Parker ballpen 0.5mm (blue) or similar","Engravings: YES /Can be customised/"],  images:["images/pen12.jpg","images/pen12_2.jpg","images/pen12_3.jpg","images/pen12_4.jpg"],video:"video/pen12.mp4"},
  13:{name:"Science Fiction", desc:"The Science fiction pen is crafted from high-grade aluminum, it maintains the brand’s signature knurled design, ensuring both aesthetic consistency and superior grip. Equipped with a high-quality bolt-action mechanism, the pen operates smoothly with a satisfying click, reinforcing its durability and reliability. A subtle engraving near the handle adds a touch of refinement. The pen's name is inspiration from Jules Gabriel Verne. French novelist, poet, and playwright whose visionary adventure tales, notably Journey to the Centre of the Earth, Twenty Thousand Leagues Under the Seas, and Around the World in Eighty Days, blended scientific fact with fiction and earned him the title \"father of science fiction.\" A pioneer of the Voyages extraordinaires series, he became one of the most translated authors in history, inspiring scientists, explorers, and countless adaptations across media.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort with single stripe","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 17g","Length: 133mm","Grip diameter: 10mm","Cartridge type: Parker ballpen 0.5mm (blue) or similar","Engravings: YES (mechanical) /Can be customised/"],  images:["images/pen13.jpg","images/pen13_2.jpg","images/pen13_3.jpg","images/pen13_4.jpg"],video:"video/pen13.mp4"},
  14:{name:"Mars Lander", desc:"Inspired by the pioneering Mars lander missions, this pen captures the spirit of exploration in a refined everyday instrument. Its precision-machined anodised aluminium body features a metallic reflective finish reminiscent of the spacecraft that have journeyed across the Martian landscape, combining durability with a clean, aerospace-inspired aesthetic. A premium spring-steel 301 clip provides exceptional strength, resilience, and secure pocket retention, while a precision knurled grip ring offers confident control and comfort for extended writing sessions. Completing the design is a finely engraved eagle motif, symbolising vision, courage, and the relentless pursuit of discovery. Built with premium materials and engineered for lasting performance, this pen is more than a writing tool—it's a tribute to human ingenuity and the enduring ambition to explore worlds beyond our own.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort with single stripe","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 17g","Length: 130 mm","Grip diameter: 10mm","Cartridge type: Parker ballpen 0.5mm (blue) or similar","Engravings: YES (mechanical) /Can be customised/"],  images:["images/pen14.jpg","images/pen14_2.jpg","images/pen14_3.jpg","images/pen14_4.jpg"],video:"video/pen14.mp4"},
  15:{name:"Morphius", desc:"Inspired by the idea that the finest tools should evolve with their owner, Morphius is a pen engineered for complete versatility. At its heart is a precision-crafted modular extension that transforms the pen to accommodate different refill systems without compromising its balance, feel, or elegance. By simply repositioning the extension, Morphius seamlessly accepts Pilot G2, Parker G2, or 3 mm mini cartridges, giving you the freedom to choose the writing experience that best suits the moment. One pen. Three refill standards. Endless possibilities. Machined from premium metal with meticulous attention to detail, every component is designed for precision, durability, and a satisfying tactile experience. The seamless construction and carefully balanced weight make Morphius as enjoyable to hold as it is to write with. Morphius embodies the belief that exceptional design is never limited by convention. It is a writing instrument that transforms with purpose—ready to adapt, perform, and inspire wherever your ideas lead.", features:["Material: Anodized Aluminium","Grip: Knurled for Comfort with single stripe","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 19g","Length: 146 mm","Grip diameter: 10mm","Cartridge type: Pilot or 3mm or Parker ballpen 0.5mm (blue) or similar","Engravings: YES (mechanical) /Can be customised/"],  images:["images/pen15.jpg","images/pen15_2.jpg","images/pen15_3.jpg","images/pen15_4.jpg"],video:"video/pen15.mp4"},
  16:{name:"Legatus Legionis", desc:"Inspired by the authority, discipline, and honour of the Legatus Legionis—the commander entrusted with leading an entire Roman legion—this pen embodies strength, precision, and timeless craftsmanship. The body is precision-machined from anodised aluminium, offering exceptional durability while maintaining a refined, lightweight balance. A solid brass top and two engraved brass rings bearing the inscription LEGATUS LEGIONIS pay tribute to the metal that symbolised prestige and resilience throughout the Roman Empire. Brass adorned military equipment, ceremonial objects, and the finest armour, valued not only for its beauty but for its enduring strength. A precision-formed 301 stainless steel clip provides lasting resilience and secure carry, while the screw cap delivers a satisfying mechanical action that reflects the confidence of a finely engineered instrument. Completing the design is a meticulously engraved eagle—the eternal emblem of the Roman legions—representing leadership, courage, and unwavering purpose. More than a writing instrument, Legatus Legionis is a tribute to those who lead by example. It celebrates the enduring values of honour, discipline, and excellence, carrying the legacy of Rome into every word you write.", features:["Material: Anodized Aluminium","Grip: two brass rings (one engraved)","Endcaps: Polished Brass and aluminium with screw thread","Limited Edition","Weight: 19g","Length: 135 mm","Grip diameter: 10mm","Cartridge type: Pilot G2 but with block piece -Parker ballpen 0.5mm (blue) or similar","Engravings: YES (mechanical) /Can be customised/"],  images:["images/pen16.jpg","images/pen16_2.jpg","images/pen16_3.jpg","images/pen16_4.jpg"],video:"video/pen16.mp4"},
  17:{name:"Centurion Boltus", desc:"A bold everyday carry built for control and speed. The bolt-action feels direct and mechanical, giving a sense of purpose with every click. Brass accents warm the cool aluminium body, while the knurled grip locks into the hand like a precision tool. A pen made for decisive writing.", features:["Material: Anodized Aluminium, Brass","Grip: Knurled for Comfort with single stripe","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 35g","Length: 131 mm","Grip diameter: 10mm","Cartridge type: Parker ballpen 0.5mm (blue) or similar","Engravings: NO /Can be customised/"],  images:["images/pen17.jpg","images/pen17_2.jpg","images/pen17_3.jpg","images/pen17_4.jpg"],video:"video/pen17.mp4"},
  18:{name:"Praetor Capis", desc:"Quiet, refined, and deliberate. The screw cap opens like a ritual before writing begins. Brass rings add rhythm and balance to the sleek aluminium form, while the weighted brass top gives a grounded feel. It writes with calm authority, built for focused thought and clean execution. Designed for Pilot G2 refills, it can also be adapted with a small internal insert to accept Parker-style cartridges, making it flexible without losing its character.", features:["Material: Anodized Aluminium and Brass","Grip: Knurled for Comfort with single stripe","Endcaps: Polished Reflective Finish","Limited Edition","Weight: 20g","Length: 130 mm","Grip diameter: 10mm","Cartridge type: Pilot or 3mm or Parker ballpen 0.5mm (blue) or similar","Engravings: NO /Can be customised/"],  images:["images/pen18.jpg","images/pen18_2.jpg","images/pen18_3.jpg","images/pen18_4.jpg"],video:"video/pen18.mp4"},
  19:{name:"Beyond Time", desc:"Crafted from solid aluminium, the BEYOND TIME pen is designed for those who appreciate engineering, minimalism, and enduring quality. Every detail has a purpose—from its precision-machined body to its balanced weight—creating a writing instrument that feels as refined as it looks. Unlike disposable plastic pens, aluminium offers exceptional durability while remaining lightweight and comfortable for everyday use. Its satin-machined finish highlights the natural beauty of the metal, developing character through years of use rather than wearing out. Aluminium is also corrosion-resistant and highly recyclable, making it a practical long-term material choice. The engraved BEYOND TIME name reflects more than a design—it represents ideas that outlast trends, craftsmanship that endures, and writing that leaves a lasting impression.", features:["Material: Anodized Aluminium ","Grip: 5 lines for Comfort","Endcaps: Knurled screw end supported by spring","Limited Edition","Weight: 20g","Length: 127 mm","Grip diameter: 8 mm","Cartridge type: 3mm with spring notch","Engravings:Bold text: BEYOND TIME, on the cone: GRIP TECHNOLOGY"],  images:["images/beyond_time_0bs.jpg","images/beyond_time_2as.jpg","images/beyond_time_3s.jpg","images/beyond_time_4s.jpg"],video:"video/beyond_time.mp4"},
  20:{name:"Martian Coil", desc:"Inspired by humanity's dream of Mars. Engineered for those who build the future. MARTIAN COIL is more than a pen—it's a tribute to exploration, engineering, and imagination. Designed and handcrafted from solid aluminium, it combines precision machining with artistic engraving to create a writing instrument unlike any other. The clean cylindrical body is intentionally minimalist, allowing the engraved artwork to become the centrepiece. Inspired by the classic visions of Mars exploration, the engraving depicts a lone rover, a geodesic habitat, a launch rocket and the distant Martian horizon. Rather than overwhelming the eye with detail, the artwork embraces simplicity, echoing the refined engravings found on vintage scientific instruments and luxury timepieces. The name MARTIAN COIL reflects both the pioneering spirit of interplanetary exploration and the engineering elegance of precision mechanics. Every line has been carefully considered so the design remains crisp and recognisable even at the miniature scale of the pen barrel. The satin-finished aluminium body contrasts beautifully with the polished metal accents, creating a timeless industrial aesthetic. Every component is precision-machined and assembled by hand, resulting in a pen that feels solid, balanced and reassuringly mechanical. Whether resting on a desk or held in the hand, MARTIAN COIL is designed to spark curiosity. It is a conversation piece for engineers, designers, scientists, makers and everyone who believes that great ideas begin with a simple sketch.", features:["Material: Anodized Aluminium ","Grip: shiny aluminium","Endcaps: shiny","Limited Edition - 10 units","Weight: 30g","Length: 127 mm","Grip diameter: 13 mm","Cartridge type: Pilot refill","Engravings:MARTIAN COIL,GRIP TECHNOLOGY, LIMITED EDITION"],  images:["images/Martian_coil_1.jpg","images/Martian_coil_2.jpg","images/Martian_coil_3.jpg","images/Martian_coil_4.jpg"],video:"video/pen20.mp4"},
  21:{name:"Martian Dust", desc:"A piece of Mars captured in copper and aluminium. MARTIAN DUST is a celebration of minimalist industrial design, where precision engineering meets the timeless beauty of natural materials. The warm brushed copper barrel carries the unmistakable colour of the Martian landscape — the deep rust tones of iron-rich soil, ancient deserts and the dusty surface of the Red Planet. As light moves across the satin finish, the copper reveals subtle variations, creating a surface that feels almost geological, as if shaped by the winds of Mars itself. Contrasting this warm, planetary character are the bright polished aluminium components: the grip, tip and end caps. Their cool metallic reflections create a deliberate balance between the raw beauty of Mars and the precision of advanced engineering. With its substantial 13 mm diameter and 130 mm heavy body, MARTIAN DUST has a presence that can be felt immediately in the hand. The weight, balance and smooth machined surfaces transform a simple writing instrument into a tactile experience. The design follows a philosophy of restraint. There are no unnecessary decorations — only carefully chosen proportions, contrasting materials and the natural character of metal. The brushed copper becomes the centrepiece, while the aluminium accents provide a clean, futuristic edge. Like the Martian surface itself, every copper barrel develops a unique character over time. Small changes in tone and texture become a personal record of use, making each pen different from the moment it begins its journey with its owner. Handcrafted in small batches, MARTIAN DUST represents the meeting point between exploration, craftsmanship and engineering discipline.", features:["Material: Anodized Aluminium ","Grip: Aluminium (clean)","Endcaps: Shiny/ flat","Limited Edition","Weight: 45g","Length: 130 mm","Grip diameter: 13 mm","Cartridge type: Pilot refill","Engravings: NO"],  images:["images/Martian_dust_1.jpg","images/Martian_dust_2.jpg","images/Martian_dust_3.jpg","images/Martian_dust_4.jpg"],video:"video/pen21.mp4"},

};

/* Pen Detail Modal */
function showDetail(id){
  const detail = pens[id];
  const mainImage = document.getElementById("detail-img");
  const video = document.getElementById("detail-video");

 // Show image by default
    mainImage.style.display = "block";
    video.style.display = "none";
    video.pause();

  mainImage.src = detail.images[0];

  const thumbs = document.getElementById("thumbs");
  thumbs.innerHTML = "";
 // ----- Image thumbnails -----
  detail.images.forEach(image => {

      const img = document.createElement("img");

      img.src = image;

      img.onclick = function(){

          // Stop and hide the video
          video.pause();
          video.currentTime = 0;
          video.style.display = "none";

          // Show the image again
          mainImage.style.display = "block";
          mainImage.src = image;

      };

      thumbs.appendChild(img);

  });

 // ----- Video thumbnail -----

    if(detail.video){

        const videoThumb = document.createElement("div");

        videoThumb.className = "video-thumb";

        videoThumb.innerHTML = "▶";

       videoThumb.onclick = function(){
        mainImage.style.display = "none";
        video.style.display = "block";
        if(video.src.indexOf(detail.video) === -1){
            video.src = detail.video;
            video.load();
        }
        video.play();
        };

        thumbs.appendChild(videoThumb);

    }
 // ----- Text -----

  document.getElementById('detail-name').innerText = detail.name;
  document.getElementById('detail-desc').innerText = detail.desc;
  const ul = document.getElementById('detail-features');
  ul.innerHTML = "";
  detail.features.forEach(f => {
    const li = document.createElement('li');
    li.innerText = f;
    ul.appendChild(li);
  });
  document.getElementById('pen-detail').classList.remove('hidden');
}
function closeDetail(){

    const video = document.getElementById("detail-video");

    video.pause();
    video.currentTime = 0;
    video.style.display = "none";

    document.getElementById("detail-img").style.display = "block";

    document.getElementById("pen-detail").classList.add("hidden");
}

/* Hero Slider */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);

/* Optional Particle Effect */
const canvas = document.createElement('canvas');
canvas.id='bg-canvas';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize',()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight;});
const particles=[];
for(let i=0;i<50;i++){
  particles.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*2+1, dx:(Math.random()-0.5)*0.3, dy:(Math.random()-0.5)*0.3});
}
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,215,0,0.3)";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();