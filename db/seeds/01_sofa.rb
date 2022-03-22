require "open-uri"

s1 = Furniture.create(name: "Neva Sofa", 
  description: "The fluffiest, comfiest \“wow this is soft\” collection we\’ve made. Neva\’s playfully minimal style will turn any room into an effortless oasis.",
  highlight:"
Neva's seat cushions contain five layers: your choice of loose fill (Feather Down or Poly Fill) on top and bottom, 
two \"comfort layers\" of high-density foam for a little extra squish, 
and a \"support layer\" of high-density foam at the center for structure and stability. The fill makes up 40% of the overall cushion, 
and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.",
  dimension: 'Overall dimensions: 84"W x 41"D x 33"H
Seat height: 18\”
Seat width: 78\”
Seat depth w/ back cushion: 26\”
Seat depth w/o back cushion: 35\”
Arm height: 26\"
Arm width: 3\"
Frame height: 29\"
Weight: 165 lbs
Box dimensions: 86\”W x 43\”D x 30\”H',
 category: "Sofa", color: "Pacific Pearl", price: 2599)

s1_0 = open("https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/neva/neva1.webp")
s1_1 = open("https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/neva/neva3.webp")
s1_2 = open("https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/neva/neva4.webp")
s1_3 = open("https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/neva/neva5.webp")
s1_4 = open("https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/neva/neva6.webp")
s1_5 = open("https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/neva/neva7.jpeg")
s1_6 = open("https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/neva/neva8.webp")
s1_7 = open("https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/neva/neva9.webp")
s1_8 = open("https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/neva/neva10.jpeg")

s1.images.attach(io:s1_0, filename: 'sofa/neva/neva.webp')
s1.images.attach(io:s1_1, filename: 'sofa/neva/neva3.webp')
s1.images.attach(io:s1_2, filename: 'sofa/neva/neva4.webp')
s1.images.attach(io:s1_3, filename: 'sofa/neva/neva5.webp')
s1.images.attach(io:s1_4, filename: 'sofa/neva/neva6.webp')
s1.images.attach(io:s1_5, filename: 'sofa/neva/neva7.webp')
s1.images.attach(io:s1_6, filename: 'sofa/neva/neva8.jpeg')
s1.images.attach(io:s1_7, filename: 'sofa/neva/neva9.webp')
s1.images.attach(io:s1_8, filename: 'sofa/neva/neva10.jpeg')


s2 = Furniture.create({name: "Aria Sofa", 
  description: "Airy, modular, and just a little bit doughy. Aria\'s armless design and fixed slipcover mean the styling options (and the good angles) are neverending.",
  highlight:"
Aria's seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a \“support layer\” of high-density foam sandwiched between the fill for structure and stability. The fill makes up 40% of the overall cushion, 
and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.",
  dimension: 'Overall dimensions: 72\”W x 42\”D x 35\”H
Seat height: 17\”
Seat width: 72\”
Seat depth w/ back cushion: 26\”
Seat depth w/o back cushion: 36\”
Weight: 136.4 lbs
Box dimensions: 74\”W x 44\”D x 30\”H',
 category: "Sofa", color: "Ancient Indigo", price: 2499 })

s2_0 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/aria/aria1.webp')
s2_1 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/aria/aria2.jpeg')
s2_2 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/aria/aria3.jpeg')
s2_3 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/aria/aria5.jpeg')
s2_4 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/aria/aria8.jpeg')
s2_5 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/aria/aria9.jpeg')
s2_6 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/aria/aria11.jpeg')
s2_7 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/aria/aria12.webp')


s2.images.attach(io:s2_0, filename: 'sofa/aria/aria1.webp')
s2.images.attach(io:s2_1, filename: 'sofa/aria/aria2.jpeg')
s2.images.attach(io:s2_2, filename: 'sofa/aria/aria3.jpeg')
s2.images.attach(io:s2_3, filename: 'sofa/aria/aria5.jpeg')
s2.images.attach(io:s2_4, filename: 'sofa/aria/aria8.jpeg')
s2.images.attach(io:s2_5, filename: 'sofa/aria/aria9.jpeg')
s2.images.attach(io:s2_6, filename: 'sofa/aria/aria11.jpeg')
s2.images.attach(io:s2_7, filename: 'sofa/aria/aria12.webp')



s3 = Furniture.create({name: "Gabriel Sofa", 
  description: "A sharp, slim shelter arm with concise proportions and an unexpectedly squishy plop. Don't let the contemporary looks fool you—Gabriel too is a softy at heart.",
  highlight:"
Gabriel's seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a \“support layer\” of high-density foam sandwiched between the fill for structure and stability. 
The fill makes up 40% of the overall cushion, and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
",
  dimension: 'Overall dimensions: 84\"W x 33\"D x 30\"H
Seat height: 16.5”
Seat width: 80\"
Seat depth w/ back cushion: 23”
Seat depth w/o back cushion: 31”
Arm height: 25.5"
Arm width: 2\"
Weight: 154 lbs
Box dimensions: 86\”W x 35\”D x 28\”H',
 category: "Sofa", color: "Beach Walk", price: 2399 })

s3_0 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/gabe/gabe1.jpeg')
s3_1 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/gabe/gabe2.jpeg')
s3_2 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/gabe/gabe3.jpeg')
s3_3 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/gabe/gabe4.jpeg')
s3_4 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/gabe/gabe5.jpeg')
s3_5 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/gabe/gabe6.webp')
s3_6 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/gabe/gabe7.webp')
s3_7 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/gabe/gabe8.jpeg')
s3_8 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/gabe/gabe9.webp')

s3.images.attach(io:s3_0, filename: 'sofa/gabe/gabe1.jpeg')
s3.images.attach(io:s3_1, filename: 'sofa/gabe/gabe2.jpeg')
s3.images.attach(io:s3_2, filename: 'sofa/gabe/gabe3.jpeg')
s3.images.attach(io:s3_3, filename: 'sofa/gabe/gabe4.jpeg')
s3.images.attach(io:s3_4, filename: 'sofa/gabe/gabe5.jpeg')
s3.images.attach(io:s3_5, filename: 'sofa/gabe/gabe6.webp')
s3.images.attach(io:s3_6, filename: 'sofa/gabe/gabe7.webp')
s3.images.attach(io:s3_7, filename: 'sofa/gabe/gabe8.jpeg')
s3.images.attach(io:s3_8, filename: 'sofa/gabe/gabe9.webp')


s4 = Furniture.create({name: "Elias Sofa", 
  description: "A huggable homage to the quintessential European roll arm—except more marshmallow-y. Elias gives soft a new meaning, with rounded details and a delightfully spongy seat.",
  highlight:"
Elias' seat cushions contain five layers: your choice of loose fill (Feather Down or Poly Fill) on top and bottom, 
two comfort layers of high-density foam for a little extra squish, and a \"support layer\" of high-density foam at the center for structure and stability.
The fill makes up 40% of the overall cushion, and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
",
  dimension: 'Overall dimensions: 84\"W x 41\"D x 35\"H
Seat height: 20\”
Seat width: 72\"
Seat depth w/ back cushion: 21\”
Seat depth w/o back cushion: 34\”
Arm height: 25\"
Arm width: 6\"
Frame height: 32\"
Weight: 158.4 lbs
Box dimensions: 86\”W x 43\”D x 34\”H',
 category: "Sofa", color: "Beach Walk", price: 2699 })

s4_0 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/elias/elias1.webp')
s4_1 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/elias/elias2.webp')
s4_2 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/elias/elias3.webp')
s4_3 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/elias/elias4.png')

s4.images.attach(io:s4_0, filename: 'sofa/elias/elias1.webp')
s4.images.attach(io:s4_1, filename: 'sofa/elias/elias2.webp')
s4.images.attach(io:s4_2, filename: 'sofa/elias/elias3.webp')
s4.images.attach(io:s4_3, filename: 'sofa/elias/elias4.png')



s5 = Furniture.create({name: "Olea Sofa", 
  description: "Nothing this cute has any right to be so cozy. Olea\'s seat is exceptionally soft, its plushy back cushions look very nearly edible, and its neatly fixed slipcover shows a peek at the solid oak base for gorgeous material contrast.",
  highlight:"
Olea\'s seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a \“support layer\” of high-density foam sandwiched between the fill for structure and stability. The fill makes up 40% of the overall cushion, 
and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
",
  dimension: 'Overall dimensions: 84\”W x 41\”D x 35\”H
Seat height: 18\”
Seat width: 84\”
Seat depth w/ back cushion: 24\”
Seat depth w/o back cushion: 31\”
Weight: 173 lbs
Box dimensions: 86\”W x 42\”D x 34\”H',
 category: "Sofa", color: "Cotton Canvas", price: 2699 })

s5_0 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/olea/olea1.webp')
s5_1 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/olea/olea2.webp')
s5_2 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/olea/olea3.webp')
s5_3 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/olea/olea4.jpeg')
s5_4 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/olea/olea5.webp')
s5_5 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/olea/olea6.jpeg')
s5_6 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/olea/olea7.jpeg')
s5_7 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/olea/olea8.webp')

s5.images.attach(io:s5_0, filename: 'sofa/olea/olea1.webbp')
s5.images.attach(io:s5_1, filename: 'sofa/olea/olea2.webp')
s5.images.attach(io:s5_2, filename: 'sofa/olea/olea3.webp')
s5.images.attach(io:s5_3, filename: 'sofa/olea/olea4.jpeg')
s5.images.attach(io:s5_4, filename: 'sofa/olea/olea5.webp')
s5.images.attach(io:s5_5, filename: 'sofa/olea/olea6.jpeg')
s5.images.attach(io:s5_6, filename: 'sofa/olea/olea7.jpeg')
s5.images.attach(io:s5_7, filename: 'sofa/olea/olea8.webp')


s6 = Furniture.create({name: "Ziki Sofa", 
  description: "A nod to the forever-chic 20th century French design sensibilities. Ziki\’s rounded shoulders and plush bench cushion marry minimalism and coziness, and the sloping, cushion-less back is made deceivingly soft by layers of foam hidden beneath the surface.
",
  highlight:"
Ziki\'s seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
and a \“support layer\” of high-density foam sandwiched between the fill for structure and stability. 
The fill makes up 40% of the overall cushion, and the foam makes up 60%.
Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
",
  dimension: 'Overall dimensions: 84\"W x 37\"D x 31\"H
Seat height: 19\”
Seat width: 70\”
Seat depth: 25\”
Arm height: 24\"
Arm width: 4\"
Frame height: 31\"
Weight: 150 lbs
Box dimensions: 86\”W x 39\”D x 32.5\”H',
 category: "Sofa", color: "Jasmine Rice", price: 2699 })

s6_0 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/ziki/ziki1.webp')
s6_1 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/ziki/ziki2.jpeg')
s6_2 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/ziki/ziki3.webp')
s6_3 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/ziki/ziki4.webp')
s6_4 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/ziki/ziki5.jpeg')
s6_5 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/ziki/ziki6.webp')
s6_6 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/ziki/ziki7.webp')
s6_7 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/ziki/ziki8.webp')
s6_8 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/sofa/ziki/ziki9.webp')

s6.images.attach(io:s6_0, filename: 'sofa/ziki/ziki1.webp')
s6.images.attach(io:s6_1, filename: 'sofa/ziki/ziki2.jpeg')
s6.images.attach(io:s6_2, filename: 'sofa/ziki/ziki3.webp')
s6.images.attach(io:s6_3, filename: 'sofa/ziki/ziki4.webp')
s6.images.attach(io:s6_4, filename: 'sofa/ziki/ziki5.jpeg')
s6.images.attach(io:s6_5, filename: 'sofa/ziki/ziki6.webp')
s6.images.attach(io:s6_6, filename: 'sofa/ziki/ziki7.webp')
s6.images.attach(io:s6_7, filename: 'sofa/ziki/ziki8.webp')
s6.images.attach(io:s6_8, filename: 'sofa/ziki/ziki9.webp')

