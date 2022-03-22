require "open-uri"


se1 = Furniture.create(name: "Neva Chaise Sectional", 
  description: "The fluffiest, comfiest “wow this is soft” collection we\’ve made. Neva\’s playfully minimal style will turn any room into an effortless oasis.",
  highlight:"
Our sectionals are all modular, meaning pieces can be arranged and rearranged to create an ideal configuration for your space. 
All modular pieces (including ottomans) connect to each other using zinc alligator clips fixed to the underside.",
  dimension: 'Overall dimensions: 123"W x 84"D x 33"H
Armless: 41\"W x 41\"D x 33\"H
R/L Arm: 41\"W x 41\"D x 33\"H
Sectional Ottoman: 41\"W x 43\"D x 18\"H
Seat height: 18\”
Seat depth w/ back cushion: 26\”
Seat depth w/o back cushion: 35\”
Arm height: 26\"
Arm width: 3\"
Frame height: 29\"
Weight: 255 lbs
Box dimensions: 43\”W x 43\”D x 30\”H (x3), 43\”W x 45\”D x 20\”H',
 category: "Sectional", color: "Jasmine Rice", price: 4799)

se1_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/neva/neva1.jpeg')
se1_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/neva/neva2.jpeg')
se1_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/neva/neva3.jpeg')
se1_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/neva/neva4.jpeg')
se1_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/neva/neva5.webp')
se1_5 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/neva/neva6.webp')
se1_6 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/neva/neva7.webp')

se1.images.attach(io:se1_0, filename: 'sectional/neva/neva1.jpeg')
se1.images.attach(io:se1_1, filename: 'sectional/neva/neva2.jpeg')
se1.images.attach(io:se1_2, filename: 'sectional/neva/neva3.jpeg')
se1.images.attach(io:se1_3, filename: 'sectional/neva/neva4.jpeg')
se1.images.attach(io:se1_4, filename: 'sectional/neva/neva5.webp')
se1.images.attach(io:se1_5, filename: 'sectional/neva/neva6.webp')
se1.images.attach(io:se1_6, filename: 'sectional/neva/neva7.webp')


se2 = Furniture.create({name: "Devyn L-Shape Sectional", 
  description: "Lush, deep-seat comfort with chilled out, modern lines. Devyn\’s contemporary shape and breezy slipcover create a unique balance that\’s equal parts refined and laid back.",
  highlight:"
Devyn\'s seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a \“support layer\” of high-density foam sandwiched between the fill for structure and stability. The fill makes up 40% of the overall cushion, 
and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.",
  dimension: 'Overall dimensions: 145W x 98\"D x 33\"H
Armless: 47\"W x 46.5\"D x 33\"H
Corner: 46.5\"W x 46.5\"D x 33\"H
R/L Arm: 51.5\"W x 46.5\"D x 33\"H
Seat height: 18/”
Seat depth w/ back cushion: 22.5\”
Seat depth w/o back cushion: 38\”
Arm height: 22.5\"
Arm width: 4.5\"
Weight: 394 lbs
Box dimensions: 53\”W x 48\”D x 26\”H (x2), 49\"W x 48\"D x 26\"H (x2)',
 category: "Sectional", color: "Corn Silk", price: 6099 })

se2_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/devyn/devyn1.jpeg')
se2_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/devyn/devyn2.webp')
se2_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/devyn/devyn3.jpeg')
se2_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/devyn/devyn4.webp')
se2_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/devyn/devyn5.jpeg')

se2.images.attach(io:se2_0, filename: 'sectional/devyn/devyn1.jpeg')
se2.images.attach(io:se2_1, filename: 'sectional/devyn/devyn2.webp')
se2.images.attach(io:se2_2, filename: 'sectional/devyn/devyn3.jpeg')
se2.images.attach(io:se2_3, filename: 'sectional/devyn/devyn4.webp')
se2.images.attach(io:se2_4, filename: 'sectional/devyn/devyn5.jpeg')



se3 = Furniture.create({name: "Gabriel Chaise Sectional", 
  description: "A sharp, slim shelter arm with concise proportions and an unexpectedly squishy plop. Don\'t let the contemporary looks fool you—Gabriel too is a softy at heart.",
  highlight:"
Gabriel/'s seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a /“support layer/” of high-density foam sandwiched between the fill for structure and stability. 
The fill makes up 40% of the overall cushion, and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
",
  dimension: 'Overall dimensions: 84/"W x 33/"D x 30/"H
Seat height: 16.5/”
Seat width: 80/"
Seat depth w/ back cushion: 23/”
Seat depth w/o back cushion: 31/”
Arm height: 25.5/"
Arm width: 2/"
Weight: 154 lbs
Box dimensions: 86/”W x 35/”D x 28/”H',
 category: "Sectional", color: "Ink Cap", price: 4449 })

se3_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/gabe/gabe1.jpeg')
se3_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/gabe/gabe2.jpeg')
se3_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/gabe/gabe3.jpeg')
se3_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/gabe/gabe4.webp')
se3_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/gabe/gabe5.webp')
se3_5 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/gabe/gabe6.jpeg')


se3.images.attach(io:se3_0, filename: 'sectional/gabe/gabe1.jpeg')
se3.images.attach(io:se3_1, filename: 'sectional/gabe/gabe2.jpeg')
se3.images.attach(io:se3_2, filename: 'sectional/gabe/gabe3.jpeg')
se3.images.attach(io:se3_3, filename: 'sectional/gabe/gabe4.webp')
se3.images.attach(io:se3_4, filename: 'sectional/gabe/gabe5.webp')
se3.images.attach(io:se3_5, filename: 'sectional/gabe/gabe6.jpeg')



se4 = Furniture.create({name: "Aria Chaise Sectional", 
  description: "Airy, modular, and just a little bit doughy. Aria/'s armless design and fixed slipcover mean the styling options (and the good angles) are neverending.",
  highlight:"
Aria/'s seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a /“support layer/” of high-density foam sandwiched between the fill for structure and stability. 
The fill makes up 40% of the overall cushion, and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
",
  dimension: 'Overall dimensions: 126/"W x 84/"D x 35/"H
Chair: 42/"W x 42/"D x 35/"H
Ottoman: 42/"W x 42/"D x 17/"H
Seat height: 17/”
Seat depth w/ back cushion: 26/”
Seat depth w/o back cushion: 36/”
Weight: 275 lbs
Box dimensions: 44/”W x 44”D x 30”H (x3), 44”W x 44”D x 19”H',
 category: "Sectional", color: "Moon Dust", price: 4749 })

se4_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/aria/aria1.webp')
se4_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/aria/aria2.png')
se4_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/aria/aria3.webp')
se4_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/aria/aria4.webp')
se4_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/aria/aria5.webp')
se4_5 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/aria/aria6.webp')
se4_6 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/aria/aria7.jpeg')
se4_7 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/aria/aria8.jpeg')
se4_8 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/aria/aria10.jpeg')

se4.images.attach(io:se4_0, filename: 'sectional/aria/aria1.webp')
se4.images.attach(io:se4_1, filename: 'sectional/aria/aria2.png')
se4.images.attach(io:se4_2, filename: 'sectional/aria/aria3.webp')
se4.images.attach(io:se4_3, filename: 'sectional/aria/aria4.webp')
se4.images.attach(io:se4_4, filename: 'sectional/aria/aria5.webp')
se4.images.attach(io:se4_5, filename: 'sectional/aria/aria6.webp')
se4.images.attach(io:se4_6, filename: 'sectional/aria/aria7.jpeg')
se4.images.attach(io:se4_7, filename: 'sectional/aria/aria8.jpeg')
se4.images.attach(io:se4_8, filename: 'sectional/aria/aria10.jpeg')



se5 = Furniture.create({name: "Elias L-Shape Sectional", 
  description: "A huggable homage to the quintessential European roll arm—except more marshmallow-y. Elias gives soft a new meaning, with rounded details and a delightfully spongy seat.",
  highlight:"
Elias' seat cushions contain five layers: your choice of loose fill (Feather Down or Poly Fill) on top and bottom,
two \"comfort layers\" of high-density foam for a little extra squish, and a \"support layer\" of high-density foam at the center for structure and stability. 
The fill makes up 40% of the overall cushion, and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.",
  dimension: 'Overall dimensions: 113\"W x 77\"D x 35\"H
Armless: 36\"W x 41\"D x 35\"H
Corner: 41\"W x 41\"D x 35\"H
Seat height: 20”
Seat depth w/ back cushion: 21\”
Seat depth w/o back cushion: 34\”
Arm height: 25\"
Arm width: 6\"
Frame height: 32\"
Weight: 315 lbs
Box dimensions: 38\”W x 43\”D x 34\”H (x3), 43\”W x 43\”D x 34\”H',
 category: "Sectional", color: "Pacific Pearl", price: 4099 })

se5_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/elias/elias1.jpeg')
se5_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/elias/elias2.jpeg')
se5_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/elias/elias3.webp')
se5_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/elias/elias4.webp')
se5_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/elias/elias5.jpeg')

se5.images.attach(io:se5_0, filename: 'sectional/elias/elias1.jpeg')
se5.images.attach(io:se5_1, filename: 'sectional/elias/elias2.jpeg')
se5.images.attach(io:se5_2, filename: 'sectional/elias/elias3.webp')
se5.images.attach(io:se5_3, filename: 'sectional/elias/elias4.webp')
se5.images.attach(io:se5_4, filename: 'sectional/elias/elias5.jpeg')



se6 = Furniture.create({name: "Amelia Corner Sectional", 
  description: "A gentle slope arm for those who love blurring the line between contemporary and classic. Amelia\'s bench seat is slightly more upright than our other families, making it an entertaining expert.
",
  highlight:"
Amelia's seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a \“support layer\” of high-density foam sandwiched between the fill for structure and stability. The fill makes up 40% of the overall cushion,
and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
",
  dimension: 'Overall dimensions: 113\"W x 113\"D x 33\"H
Armless: 39\"W x 35\"D x 33\"H
R/L Arm: 39\"W x 35\"D x 33\"H
Corner: 35\"W x 35\"D x 33\"H
Seat height: 17\”
Seat depth w/ back cushion: 23\”
Seat depth w/o back cushion: 30\”
Arm height: 24\"
Arm width: 3\"
Frame height: 28\"
Weight: 337 lbs
Box dimensions: 41\”W x 37\”D x 30\”H (x4), 37\"W x 37\"D x 30\"H',
 category: "Sectional", color: "Jasmine Rice", price: 6099 })

se6_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/amelia/amelia1.webp')
se6_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/amelia/amelia2.webp')
se6_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/amelia/amelia3.jpeg')
se6_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/amelia/amelia4.webp')
se6_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/sectional/amelia/amelia5.jpeg')


se6.images.attach(io:se6_0, filename: 'sectional/amelia/amelia1.webp')
se6.images.attach(io:se6_1, filename: 'sectional/amelia/amelia2.webp')
se6.images.attach(io:se6_2, filename: 'sectional/amelia/amelia3.jpeg')
se6.images.attach(io:se6_3, filename: 'sectional/amelia/amelia4.webp')
se6.images.attach(io:se6_4, filename: 'sectional/amelia/amelia5.jpeg')
