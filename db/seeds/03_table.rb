# require "open-uri"


# s1 = Furniture.create(name: "Neva Sofa", 
#   description: "The fluffiest, comfiest “wow this is soft” collection we’ve made. Neva’s playfully minimal style will turn any room into an effortless oasis.",
#   highlights:"
# Neva's seat cushions contain five layers: your choice of loose fill (Feather Down or Poly Fill) on top and bottom, 
# two "comfort layers" of high-density foam for a little extra squish, 
# and a "support layer" of high-density foam at the center for structure and stability. The fill makes up 40% of the overall cushion, 
# and the foam makes up 60%.
# Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
# We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.",
#   dimension: 'Overall dimensions: 84"W x 41"D x 33"H
# Seat height: 18”
# Seat width: 78”
# Seat depth w/ back cushion: 26”
# Seat depth w/o back cushion: 35”
# Arm height: 26"
# Arm width: 3"
# Frame height: 29"
# Weight: 165 lbs
# Box dimensions: 86”W x 43”D x 30”H',
#  category: "Sofa", color: "Pacific Pearl", price: 2599)
# s1_0 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/main_13405-38-SET.webp')
# s1_1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/1340538-10x8-CROP.png')
# s1_2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-MOOD-A.webp')
# s1_3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-38-SW-P1-KO.webp')
# s1_4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-38-35.webp')
# s1_5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/belcampo+sofa/13405-38-35-T046-ALT.webp')

# s1.images.attach(io:p1_0, filename: 'images/belcampo sofa/main_13405-38-SET.webp')
# s1.images.attach(io:p1_1, filename: 'images/belcampo sofa/1340538-10x8-CROP.png')
# s1.images.attach(io:p1_2, filename: 'images/belcampo sofa/13405-MOOD-A.webp')
# s1.images.attach(io:p1_3, filename: 'images/belcampo sofa/13405-38-SW-P1-KO.webp')
# s1.images.attach(io:p1_4, filename: 'images/belcampo sofa/13405-38-35.webp')
# s1.images.attach(io:p1_5, filename: 'images/belcampo sofa/13405-38-35-T046-ALT.webp')



# s2 = Furniture.create({name: "Aria Sofa", 
#   description: "Airy, modular, and just a little bit doughy. Aria's armless design and fixed slipcover mean the styling options (and the good angles) are neverending.",
#   highlights:"
# Aria's seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
# and a “support layer” of high-density foam sandwiched between the fill for structure and stability. The fill makes up 40% of the overall cushion, 
# and the foam makes up 60%.
# Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
# We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.",
#   dimension: 'Overall dimensions: 72”W x 42”D x 35”H
# Seat height: 17”
# Seat width: 72”
# Seat depth w/ back cushion: 26”
# Seat depth w/o back cushion: 36”
# Weight: 136.4 lbs
# Box dimensions: 74”W x 44”D x 30”H',
#  category: "Sofa", color: "Ancient Indigo", price: 2499 })

# s2_1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/main_8390438-SET-10X8-CROP.png')
# s2.images.attach(io:s2_1, filename: 'images/abinger_sofa/main_8390438-SET-10X8-CROP.png')

# s2_2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/8390438-Abinger-DIM.webp')
# s2.images.attach(io:s2_2, filename: 'images/abinger_sofa/8390438-Abinger-DIM.webp')

# s2_3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-SWATCH-BODY-A-500.jpeg')
# s2.images.attach(io:s2_3, filename: 'images/abinger_sofa/83904-SWATCH-BODY-A-500.jpeg')

# s2_4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-SIDE-SW-P1-KO.webp')
# s2.images.attach(io:s2_4, filename: 'images/abinger_sofa/83904-38-SIDE-SW-P1-KO.webp')

# s2_5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-HEAD-ON-SW-P1-KO.webp')
# s2.images.attach(io:s2_5, filename: 'images/abinger_sofa/83904-38-HEAD-ON-SW-P1-KO.webp')

# s2_6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-BACK-SW-P1-KO.webp')
# s2.images.attach(io:s2_6, filename: 'images/abinger_sofa/83904-38-BACK-SW-P1-KO.webp')

# s2_7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/abinger_sofa/83904-38-ANGLE-SW-P1-KO.webp')
# s2.images.attach(io:s2_7, filename: 'images/abinger_sofa/83904-38-ANGLE-SW-P1-KO.webp')



# s3 = Product.create({name: "Gabriel Sofa", 
#   description: "A sharp, slim shelter arm with concise proportions and an unexpectedly squishy plop. Don't let the contemporary looks fool you—Gabriel too is a softy at heart.",
#   highlights:"
# Gabriel's seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
# and a “support layer” of high-density foam sandwiched between the fill for structure and stability. 
# The fill makes up 40% of the overall cushion, and the foam makes up 60%.
# Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
# We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
# ",
#   dimension: 'Overall dimensions: 84"W x 33"D x 30"H
# Seat height: 16.5”
# Seat width: 80"
# Seat depth w/ back cushion: 23”
# Seat depth w/o back cushion: 31”
# Arm height: 25.5"
# Arm width: 2"
# Weight: 154 lbs
# Box dimensions: 86”W x 35”D x 28”H',
#  category: "Sofa", color: "Beach Walk", price: 2399 })

# s3_1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/main_93303-38-SET-10X8-CROP.png')
# s3.images.attach(io:s3_1, filename: 'images/lyman_sofa/main_93303-38-SET-10X8-CROP.png')

# s3_2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-SIDE-SW-P1-KO.webp')
# s3.images.attach(io:s3_2, filename: 'images/lyman_sofa/93303-38-SIDE-SW-P1-KO.webp')

# s3_3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-HEAD-ON-SW-P1-KO.webp')
# s3.images.attach(io:s3_3, filename: 'images/lyman_sofa/93303-38-HEAD-ON-SW-P1-KO.webp')

# s3_4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-BACK-SW-P1-KO.webp')
# s3.images.attach(io:s3_4, filename: 'images/lyman_sofa/93303-38-BACK-SW-P1-KO.webp')

# s3_5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/lyman_sofa/93303-38-ANGLE-SW-P1-KO.webp')
# s3.images.attach(io:s3_5, filename: 'images/lyman_sofa/93303-38-ANGLE-SW-P1-KO.webp')



# s4 = Product.create({name: "Elias Sofa", 
#   description: "A huggable homage to the quintessential European roll arm—except more marshmallow-y. Elias gives soft a new meaning, with rounded details and a delightfully spongy seat.",
#   highlights:"
# Elias' seat cushions contain five layers: your choice of loose fill (Feather Down or Poly Fill) on top and bottom, 
# two "comfort layers" of high-density foam for a little extra squish, and a "support layer" of high-density foam at the center for structure and stability.
# The fill makes up 40% of the overall cushion, and the foam makes up 60%.
# Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
# We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
# ",
#   dimension: 'Overall dimensions: 84"W x 41"D x 35"H
# Seat height: 20”
# Seat width: 72"
# Seat depth w/ back cushion: 21”
# Seat depth w/o back cushion: 34”
# Arm height: 25"
# Arm width: 6"
# Frame height: 32"
# Weight: 158.4 lbs
# Box dimensions: 86”W x 43”D x 34”H',
#  category: "Sofa", color: "Beach Walk", price: 2699 })

# s4_1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/main_68206-65-UP-10X8-CROP.png')
# s4.images.attach(io:s4_1, filename: 'images/gaddis_sofa/main_68206-65-UP-10X8-CROP.png')

# s4_2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-SWATCH-BODY-A-500.webp')
# s4.images.attach(io:s4_2, filename: 'images/gaddis_sofa/68206-SWATCH-BODY-A-500.webp')

# s4_3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-USB-DETAIL.webp')
# s4.images.attach(io:s4_3, filename: 'images/gaddis_sofa/68206-65-USB-DETAIL.webp')

# s4_4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-UP-ANGLE-SW-P1-KO.webp')
# s4.images.attach(io:s4_4, filename: 'images/gaddis_sofa/68206-65-UP-ANGLE-SW-P1-KO.webp')

# s4_5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-SUPPORT-LEG-DETAIL.jpeg')
# s4.images.attach(io:s4_5, filename: 'images/gaddis_sofa/68206-65-SUPPORT-LEG-DETAIL.jpeg')

# s4_6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-SIDE-UP-SW-P1-KO.webp')
# s4.images.attach(io:s4_6, filename: 'images/gaddis_sofa/68206-65-SIDE-UP-SW-P1-KO.webp')

# s4_7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-SIDE-FLAT-SW-P1-KO.webp')
# s4.images.attach(io:s4_7, filename: 'images/gaddis_sofa/68206-65-SIDE-FLAT-SW-P1-KO.webp')

# s4_8 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-HEAD-ON-UP-SW-P1-KO.webp')
# s4.images.attach(io:s4_8, filename: 'images/gaddis_sofa/68206-65-HEAD-ON-UP-SW-P1-KO.webp')

# s4_9 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-HEAD-ON-FLAT-SW-P1-KO.webp')
# s4.images.attach(io:s4_9, filename: 'images/gaddis_sofa/68206-65-HEAD-ON-FLAT-SW-P1-KO.webp')

# s4_10 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-FLAT-ANGLE-SW-P1-KO.webp')
# s4.images.attach(io:s4_10, filename: 'images/gaddis_sofa/68206-65-FLAT-ANGLE-SW-P1-KO.webp')

# s4_11 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/gaddis_sofa/68206-65-FLAT-10X8-CROP.webp')
# s4.images.attach(io:s4_11, filename: 'images/gaddis_sofa/68206-65-FLAT-10X8-CROP.webp')



# s5 = Product.create({name: "Olea Sofa", 
#   description: "Nothing this cute has any right to be so cozy. Olea's seat is exceptionally soft, its plushy back cushions look very nearly edible, and its neatly fixed slipcover shows a peek at the solid oak base for gorgeous material contrast.",
#   highlights:"
# Olea's seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
# and a “support layer” of high-density foam sandwiched between the fill for structure and stability. The fill makes up 40% of the overall cushion, 
# and the foam makes up 60%.
# Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
# We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
# ",
#   dimension: 'Overall dimensions: 84”W x 41”D x 35”H
# Seat height: 18”
# Seat width: 84”
# Seat depth w/ back cushion: 24”
# Seat depth w/o back cushion: 31”
# Weight: 173 lbs
# Box dimensions: 86”W x 42”D x 34”H',
#  category: "Sofa", color: "Cotton Canvas", price: 2699 })

# s5_1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/main-U8530515-SET-10X8-CROP.png')
# s5.images.attach(io:s5_1, filename: 'images/The Man-Den Triple Power Reclining Sofa/main-U8530515-SET-10X8-CROP.png')

# s5_2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-CLSD-ANGLE-SW-P1-KO.webp')
# s5.images.attach(io:s5_2, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-CLSD-ANGLE-SW-P1-KO.webp')

# s5_3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-CUP-HLDRS.jpeg')
# s5.images.attach(io:s5_3, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-CUP-HLDRS.jpeg')

# s5_4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-ARM-STORAGE-SW.jpeg')
# s5.images.attach(io:s5_4, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-ARM-STORAGE-SW.jpeg')

# s5_5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-DDT-LIGHT-SW.webp')
# s5.images.attach(io:s5_5, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-DDT-LIGHT-SW.webp')

# s5_6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-DETAIL.webp')
# s5.images.attach(io:s5_6, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-DETAIL.webp')

# s5_7 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/AHS_TheManDen_U8530515_PwrRecSofa-AdjHeadrest_P2.jpeg')
# s5.images.attach(io:s5_7, filename: 'images/The Man-Den Triple Power Reclining Sofa/AHS_TheManDen_U8530515_PwrRecSofa-AdjHeadrest_P2.jpeg')

# s5_8 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-OPEN-ANGLE-SW-P1-KO.webp')
# s5.images.attach(io:s5_8, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-OPEN-ANGLE-SW-P1-KO.webp')

# s5_9 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-15-SIDE-SW-P1-KO.webp')
# s5.images.attach(io:s5_9, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-15-SIDE-SW-P1-KO.webp')

# s5_10 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/The+Man-Den+Triple+Power+Reclining+Sofa/U85305-SWATCH-BODY-A-500.jpeg')
# s5.images.attach(io:s5_10, filename: 'images/The Man-Den Triple Power Reclining Sofa/U85305-SWATCH-BODY-A-500.jpeg')



# s6 = Product.create({name: "Ziki Sofa", 
#   description: "A nod to the forever-chic 20th century French design sensibilities. Ziki’s rounded shoulders and plush bench cushion marry minimalism and coziness, and the sloping, cushion-less back is made deceivingly soft by layers of foam hidden beneath the surface.
# ",
#   highlights:"
# Ziki's seat cushions contain three layers: your choice of loose fill (Feather Down or Poly Fill) at the top and bottom, 
# and a “support layer” of high-density foam sandwiched between the fill for structure and stability. 
# The fill makes up 40% of the overall cushion, and the foam makes up 60%.
# Our lofty Feather Down is ethically-sourced, and our vegan Poly Fill is designed specifically to mimic the familiar fluff of feathers. 
# We mix a small percentage of vegan poly fiber into the Feather Down fill for a bit of spring.
# ",
#   dimension: 'Overall dimensions: 84"W x 37"D x 31"H
# Seat height: 19”
# Seat width: 70”
# Seat depth: 25”
# Arm height: 24"
# Arm width: 4"
# Frame height: 31"
# Weight: 150 lbs
# Box dimensions: 86”W x 39”D x 32.5”H',
#  category: "Sofa", color: "Jasmine Rice", price: 2699 })

# s6_1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/main_98310-38-SET.webp')
# s6.images.attach(io:s6_1, filename: 'images/alcona_sofa/main_98310-38-SET.webp')

# s6_2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/9831038-Alcona-DIM.webp')
# s6.images.attach(io:s6_2, filename: 'images/alcona_sofa/9831038-Alcona-DIM.webp')

# s6_3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/9831038-10X8-CROP.webp')
# s6.images.attach(io:s6_3, filename: 'images/alcona_sofa/9831038-10X8-CROP.webp')

# s6_4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/98310-38-HEAD-ON-SW-P1-KO.webp')
# s6.images.attach(io:s6_4, filename: 'images/alcona_sofa/98310-38-HEAD-ON-SW-P1-KO.webp')

# s6_5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/98310-38-BACK-SW-P1-KO.webp')
# s6.images.attach(io:s6_5, filename: 'images/alcona_sofa/98310-38-BACK-SW-P1-KO.webp')

# s6_6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/alcona_sofa/98310-38-ANGLE-SW-P1-KO.webp')
# s6.images.attach(io:s6_6, filename: 'images/alcona_sofa/98310-38-ANGLE-SW-P1-KO.webp')

