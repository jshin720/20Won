require "open-uri"


c1 = Furniture.create(name: "Neva Chair", 
  description: "The fluffiest, comfiest \“wow this is soft\” collection we\’ve made. Neva\’s playfully minimal style will turn any room into an effortless oasis.",
  highlight:"
Neva's seat cushions contain five layers: your choice of loose fill (Feather Down or Poly Fill) on top and bottom, 
two \"comfort layers\" of high-density foam for a little extra squish, 
and a \"support layer\" of high-density foam at the center for structure and stability. The fill makes up 40% of the overall cushion, 
and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.",
  dimension: 'Overall dimensions: 44\"W x 41\"D x 33\"H
Seat height: 18\”
Seat width: 38\”
Seat depth w/ back cushion: 26\”
Seat depth w/o back cushion: 35\”
Arm height: 26\"
Arm width: 3\"
Frame height: 29\"
Weight: 83.6 lbs
Box dimensions: 46\”W x 43\”D x 30\”H',
 category: "Chair", color: "Corn Silk", price: 1499)

c1_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/neva/neva0.png')
c1_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/neva/neva1.webp')
c1_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/neva/neva2.png')
c1_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/neva/neva3.png')
c1_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/neva/neva4.webp')
c1_5 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/neva/neva6.jpeg')
c1_6 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/neva/neva7.jpeg')
c1_7 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/neva/neva8.jpeg')
c1_8 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/neva/neva9.png')

c1.images.attach(io:c1_0, filename: 'chair/neva/neva0.png')
c1.images.attach(io:c1_1, filename: 'chair/neva/neva1.webp')
c1.images.attach(io:c1_2, filename: 'chair/neva/neva2.png')
c1.images.attach(io:c1_3, filename: 'chair/neva/neva3.png')
c1.images.attach(io:c1_4, filename: 'chair/neva/neva4.webp')
c1.images.attach(io:c1_5, filename: 'chair/neva/neva6.jpeg')
c1.images.attach(io:c1_6, filename: 'chair/neva/neva7.jpeg')
c1.images.attach(io:c1_7, filename: 'chair/neva/neva8.jpeg')
c1.images.attach(io:c1_8, filename: 'chair/neva/neva9.png')



c2 = Furniture.create({name: "Aria Chair", 
  description: "Airy, modular, and just a little bit doughy. Aria\'s armless design and fixed slipcover mean the styling options (and the good angles) are neverending.",
  highlight:"
Aria's seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a \“support layer\” of high-density foam sandwiched between the fill for structure and stability. The fill makes up 40% of the overall cushion, 
and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.",
  dimension: 'Overall dimensions: 42\"W x 42\"D x 35\"H
Seat height: 17\"
Seat width: 42\"
Seat depth w/ back cushion: 26\"
Seat depth w/o back cushion: 36\"
Weight: 77 lbs.
Box dimensions: 44\"W x 44\"D x 30\"H',
 category: "Chair", color: "Ink Cap", price: 1499 })

c2_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/aria/aria0.webp')
c2_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/aria/aria1.jpeg')
c2_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/aria/aria2.webp')
c2_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/aria/aria4.webp')
c2_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/aria/aria5.webp')
c2_5 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/aria/aria7.webp')
c2_6 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/aria/aria8.webp')
c2_7 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/aria/aria9.webp')
c2_8 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/aria/aria10.png')

c2.images.attach(io:c2_0, filename: 'chair/aria/aria0.webp')
c2.images.attach(io:c2_1, filename: 'chair/aria/aria1.jpeg')
c2.images.attach(io:c2_2, filename: 'chair/aria/aria2.webp')
c2.images.attach(io:c2_3, filename: 'chair/aria/aria4.webp')
c2.images.attach(io:c2_4, filename: 'chair/aria/aria5.webp')
c2.images.attach(io:c2_5, filename: 'chair/aria/aria7.webp')
c2.images.attach(io:c2_6, filename: 'chair/aria/aria8.webp')
c2.images.attach(io:c2_7, filename: 'chair/aria/aria9.webp')
c2.images.attach(io:c2_8, filename: 'chair/aria/aria10.png')


c3 = Furniture.create({name: "Gabriel Chair", 
  description: "A sharp, slim shelter arm with concise proportions and an unexpectedly squishy plop. Don't let the contemporary looks fool you—Gabriel too is a softy at heart.",
  highlight:"
Gabriel's seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a \“support layer\” of high-density foam sandwiched between the fill for structure and stability. 
The fill makes up 40% of the overall cushion, and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
",
  dimension: 'Overall dimensions: 36\"W x 33\"D x 30\"H
Seat height: 16.5\”
Seat width: 32\"
Seat depth w/ back cushion: 23\”
Seat depth w/o back cushion: 31\”
Arm height: 25.5\"
Arm width: 2\"
Weight: 61.6 lbs
Box dimensions: 38\”W x 35\”D x 28\”H',
 category: "Chair", color: "Jasmine", price: 1499 })

c3_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/gabe/gabe0.webp')
c3_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/gabe/gabe1.webp')
c3_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/gabe/gabe2.webp')
c3_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/gabe/gabe3.png')
c3_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/gabe/gabe4.png')
c3_5 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/gabe/gabe6.jpeg')
c3_6 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/gabe/gabe7.jpeg')
c3_7 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/gabe/gabe8.webp')
c3_8 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/gabe/gabe9.png')


c3.images.attach(io:c3_0, filename: 'chair/gabe/gabe0.webp')
c3.images.attach(io:c3_1, filename: 'chair/gabe/gabe1.webp')
c3.images.attach(io:c3_2, filename: 'chair/gabe/gabe2.webp')
c3.images.attach(io:c3_3, filename: 'chair/gabe/gabe3.png')
c3.images.attach(io:c3_4, filename: 'chair/gabe/gabe4.png')
c3.images.attach(io:c3_5, filename: 'chair/gabe/gabe6.jpeg')
c3.images.attach(io:c3_6, filename: 'chair/gabe/gabe7.jpeg')
c3.images.attach(io:c3_7, filename: 'chair/gabe/gabe8.webp')
c3.images.attach(io:c3_8, filename: 'chair/gabe/gabe9.png')



c4 = Furniture.create({name: "Elias Chair", 
  description: "A huggable homage to the quintessential European roll arm—except more marshmallow-y. Elias gives soft a new meaning, with rounded details and a delightfully spongy seat.",
  highlight:"
Elias' seat cushions contain five layers: your choice of loose fill (Feather Down or Poly Fill) on top and bottom, 
two comfort layers of high-density foam for a little extra squish, and a \"support layer\" of high-density foam at the center for structure and stability.
The fill makes up 40% of the overall cushion, and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
",
  dimension: 'Overall dimensions: 36\"W x 41\"D x 35\"H
Seat height: 20\”
Seat width: 24\"
Seat depth w/ back cushion: 21\”
Seat depth w/o back cushion: 34\”
Arm height: 25\"
Arm width: 6\"
Frame height: 32\"
Weight: 68.2 lbs
Box dimensions: 38\"W x 43\"D x 34\"H',
 category: "Chair", color: "Corn Silk", price: 1499 })

c4_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/elias/elias0.webp')
c4_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/elias/elias1.webp')
c4_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/elias/elias2.webp')
c4_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/elias/elias3.webp')
c4_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/elias/elias4.jpeg')
c4_5 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/elias/elias5.jpeg')
c4_6 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/elias/elias6.jpeg')
c4_7 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/elias/elias7.jpeg')
c4_8 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/elias/elias8.png')


c4.images.attach(io:c4_0, filename: 'chair/elias/elias0.webp')
c4.images.attach(io:c4_1, filename: 'chair/elias/elias1.webp')
c4.images.attach(io:c4_2, filename: 'chair/elias/elias2.webp')
c4.images.attach(io:c4_3, filename: 'chair/elias/elias3.webp')
c4.images.attach(io:c4_4, filename: 'chair/elias/elias4.jpeg')
c4.images.attach(io:c4_5, filename: 'chair/elias/elias5.jpeg')
c4.images.attach(io:c4_6, filename: 'chair/elias/elias6.jpeg')
c4.images.attach(io:c4_7, filename: 'chair/elias/elias7.jpeg')
c4.images.attach(io:c4_8, filename: 'chair/elias/elias8.png')


c5 = Furniture.create({name: "Amelia Chair", 
  description: "A gentle slope arm for those who love blurring the line between contemporary and classic. Amelia\'s bench seat is slightly more upright than our other families, making it an entertaining expert.",
  highlight:"
Amelia\'s seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a \“support layer\” of high-density foam sandwiched between the fill for structure and stability. 
The fill makes up 40% of the overall cushion, and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, 
and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
",
  dimension: 'Overall dimensions: 42\”W x 35\”D x 33\”H
Seat height: 17\”
Seat width: 36\”
Seat depth w/ back cushion: 23\”
Seat depth w/o back cushion: 30\”
Arm height: 24\”
Arm width: 3\”
Frame height: 28\”
Weight: 66 lbs
Box dimensions: 44\”W x 37\”D x 30\”H',
 category: "Chair", color: "Corn Silk", price: 1499 })

c5_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/amelia/amelia0.webp')
c5_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/amelia/amelia1.webp')
c5_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/amelia/amelia2.webp')
c5_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/amelia/amelia4.jpeg')
c5_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/amelia/amelia5.webp')
c5_5 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/amelia/amelia6.jpeg')
c5_6 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/amelia/amelia7.jpeg')
c5_7 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/amelia/amelia8.jpeg')
c5_8 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/amelia/amelia9.png')


c5.images.attach(io:c5_0, filename: 'chair/amelia/amelia0.webp')
c5.images.attach(io:c5_1, filename: 'chair/amelia/amelia1.webp')
c5.images.attach(io:c5_2, filename: 'chair/amelia/amelia2.webp')
c5.images.attach(io:c5_3, filename: 'chair/amelia/amelia4.jpeg')
c5.images.attach(io:c5_4, filename: 'chair/amelia/amelia5.webp')
c5.images.attach(io:c5_5, filename: 'chair/amelia/amelia6.jpeg')
c5.images.attach(io:c5_6, filename: 'chair/amelia/amelia7.jpeg')
c5.images.attach(io:c5_7, filename: 'chair/amelia/amelia8.jpeg')
c5.images.attach(io:c5_8, filename: 'chair/amelia/amelia9.png')





c6 = Furniture.create({name: "Quincy Chair", 
  description: "The kind of piece your kids will inherit years from now. Quincy is one of those chairs that elevates anything nearby, thanks to a stunning, fluted oak frame.
",
  highlight:"
Quincy\'s seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a \“support layer\” of high-density foam sandwiched between the fill for structure and stability. 
The fill makes up 40% of the overall cushion, and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, 
and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
",
  dimension: 'Overall dimensions: 34\”W x 35\”D x 34\”H
Seat height: 19\”
Seat width: 30\”
Seat depth w/ back cushion: 24\”
Seat depth w/o back cushion: 32\”
Arm height: 30\”
Arm width: 2\”
Frame height: 30\”
Weight: 137 lbs
Box dimensions: 38\”W x 38\”D x 36.5\”H',
 category: "Chair", color: "Corn Silk", price: 2199 })

c6_0 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/qunicy/qunicy0.webp')
c6_1 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/qunicy/qunicy1.png')
c6_2 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/qunicy/qunicy2.png')
c6_3 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/qunicy/qunicy3.png')
c6_4 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/qunicy/qunicy4.webp')
c6_5 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/qunicy/qunicy5.jpeg')
c6_6 = open('https://twenty-won-images.s3.us-east-2.amazonaws.com/chair/qunicy/qunicy6.png')



c6.images.attach(io:c6_0, filename: 'chair/qunicy/qunicy0.webp')
c6.images.attach(io:c6_1, filename: 'chair/qunicy/qunicy1.png')
c6.images.attach(io:c6_2, filename: 'chair/qunicy/qunicy2.png')
c6.images.attach(io:c6_3, filename: 'chair/qunicy/qunicy3.png')
c6.images.attach(io:c6_4, filename: 'chair/qunicy/qunicy4.webp')
c6.images.attach(io:c6_5, filename: 'chair/qunicy/qunicy5.jpeg')
c6.images.attach(io:c6_6, filename: 'chair/qunicy/qunicy6.png')
