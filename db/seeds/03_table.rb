require "open-uri"


t1 = Furniture.create(name: "Kai Dining Table", 
  description: "Characteristic solid oak—reclaimed from years-old structures in Austria—is the highlight of this sophisticated collection. Kai's distinctive imperfections and deeply flowing grain pattern offer a tactile reminder of its storied past.",
  highlight:"
Material: 100% Reclaimed Austrian Oak
Build: All wood selected, cut, laminated, assembled, and sanded by hand.
Finish: Treated with a top coat for seal.
Detail: Since each table is handmade and hand-finished, variations and imperfections are sort of the whole idea. No two pieces are exactly alike.
Assembly: Simple assembly required.",
  dimension: 'Overall dimensions: 80\”L x 42\”W x 30\”H
Top thickness: 2”
Weight: 288 lbs
Box dimensions: 91\”L x 41.5\”W x 5.5\”H, 39.5\”L x 33.5\”W x 11.5\”H',
 category: "Table", color: "Reclaimed Austrian Oak", price: 4099)

t1_0 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/kaid/kaid1.jpeg')
t1_1 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/kaid/kaid2.jpeg')
t1_2 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/kaid/kaid3.jpeg')
t1_3 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/kaid/kaid4.webp')

t1.images.attach(io:t1_0, filename: 'table/kaid/kaid1.jpeg')
t1.images.attach(io:t1_1, filename: 'table/kaid/kaid2.jpeg')
t1.images.attach(io:t1_2, filename: 'table/kaid/kaid3.jpeg')
t1.images.attach(io:t1_3, filename: 'table/kaid/kaid4.webp')


t2 = Furniture.create({name: "Rylance Console Table", 
  description: "The quintessential A-frame table gets a fresh take. Rylance's solid American oak, grand proportions, elegant joinery, and gently hammered detail inject modernity into a beloved, timeless shape.",
  highlight:"
Material: 100% American Red Oak
Build: All wood selected, cut, laminated, assembled, sanded, and hammered by hand.
Finish: Gently hand-hammered and treated with a top coat for seal.
Detail: Since each table is handmade and hand-hammered, variations, imperfections, and subtle dimples are sort of the whole idea. No two pieces are exactly alike.
Assembly: Simple assembly required.",
  dimension: 'Overall dimensions: 72\"L x 18\"W x 30\"H
Top thickness: 3\"
Weight: 138.8 lbs
Box dimensions: 79\”L x 24\"W x 9\"H, 64\"L x 27\"W x 22\"H',
 category: "Table", color: "American Red Oak", price: 1899 })

t2_0 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/rylance/rylance1.jpeg')
t2_1 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/rylance/rylance2.jpeg')
t2_2 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/rylance/rylance3.jpeg')
t2_3 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/rylance/rylance4.jpeg')
t2_4 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/rylance/rylance5.webp')
t2_5 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/rylance/rylance6.jpeg')

t2.images.attach(io:t2_0, filename: 'table/rylance/rylance1.jpeg')
t2.images.attach(io:t2_1, filename: 'table/rylance/rylance2.jpeg')
t2.images.attach(io:t2_2, filename: 'table/rylance/rylance3.jpeg')
t2.images.attach(io:t2_3, filename: 'table/rylance/rylance4.jpeg')
t2.images.attach(io:t2_4, filename: 'table/rylance/rylance5.webp')
t2.images.attach(io:t2_5, filename: 'table/rylance/rylance6.jpeg')



t3 = Furniture.create({name: "Kai Coffee Table", 
  description: "Characteristic solid oak—reclaimed from years-old structures in Austria—is the highlight of this sophisticated collection. Kai\'s distinctive imperfections and deeply flowing grain pattern offer a tactile reminder of its storied past.",
  highlight:"
Material: 100% Reclaimed Austrian Oak
Build: All wood selected, cut, laminated, assembled, and sanded by hand.
Finish: Treated with a top coat for seal.
Detail: Since each table is handmade and hand-finished, variations and imperfections are sort of the whole idea. No two pieces are exactly alike.
Assembly: Simple assembly required.
",
  dimension: 'Overall dimensions: 60\"L x 40\"W x 16\"H
Top thickness: 2\"
Weight: 189 lbs
Box dimensions: 67.5\"L x 46\”W x 5.75\”D, 39.5\"L x 19.75\"W x 11.25\"D',
 category: "Table", color: "Solid Oak", price: 1999 })

t3_0 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/kaic/kaic1.jpeg')
t3_1 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/kaic/kaic2.jpeg')
t3_2 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/kaic/kaic3.webp')
t3_3 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/kaic/kaic4.jpeg')
t3_4 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/kaic/kaic5.webp')
t3_5 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/kaic/kaic6.webp')

t3.images.attach(io:t3_0, filename: 'table/kaic/kaic1.jpeg')
t3.images.attach(io:t3_1, filename: 'table/kaic/kaic2.jpeg')
t3.images.attach(io:t3_2, filename: 'table/kaic/kaic3.webp')
t3.images.attach(io:t3_3, filename: 'table/kaic/kaic4.jpeg')
t3.images.attach(io:t3_4, filename: 'table/kaic/kaic5.webp')
t3.images.attach(io:t3_5, filename: 'table/kaic/kaic6.webp')




t4 = Furniture.create({name: "Theo Coffee Table", 
  description: "A primitive-inspired shape with modern gusto. Crafted from solid reclaimed Chinese pine, Theo's meticulously preserved characteristics add natural charm to its rounded edges and turned legs.",
  highlight:"
Material: 100% Reclaimed Chinese Pine
Build: All wood selected, cut, laminated, assembled, and sanded by hand
Finish: Treated with a top coat for seal
Detail: Since each table is handmade and hand-finished, variations and imperfections are sort of the whole idea. No two pieces are exactly alike.
",
  dimension: 'Overall dimensions: 76\"L x 24\"W x 11\"H
Top thickness: 1.5\"
Weight: 70.5 lbs
Box dimensions: 80.25\”L x 28.25\”W x 16.5\”D',
 category: "Table", color: "Chinese Pine", price: 1899 })

t4_0 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/theo/theo1.webp')
t4_1 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/theo/theo2.jpeg')
t4_2 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/theo/theo3.webp')
t4_3 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/theo/theo4.png')

t4.images.attach(io:t4_0, filename: 'table/theo/theo1.webp')
t4.images.attach(io:t4_1, filename: 'table/theo/theo2.jpeg')
t4.images.attach(io:t4_2, filename: 'table/theo/theo3.webp')
t4.images.attach(io:t4_3, filename: 'table/theo/theo4.png')


t5 = Furniture.create({name: "Fasso Dining Table", 
  description: "Bringing history to the table. Fasso's stately silhouette and grand proportions are accentuated by the rustic markings of reclaimed pine, years in the making.",
  highlight:"
Material: 100% Reclaimed Chinese Pine
Build: All wood selected, cut, laminated, assembled, and sanded by hand.
Finish: Treated with a top coat for seal.
Detail: Since each table is handmade and hand-finished, variations and imperfections are sort of the whole idea. No two pieces are exactly alike.
Assembly: Simple assembly required.
",
  dimension: 'Overall dimensions: 84\”L x 40\”W x 30\”H
Top thickness: 3\”
Weight: 253.5 lbs
Box dimensions: 91\”L x 46.25\”W x 14\”H',
 category: "Table", color: "Chinese Pine", price: 2599 })

t5_0 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/fasso/fasso1.webp')
t5_1 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/fasso/fasso2.jpeg')
t5_2 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/fasso/fasso3.jpeg')
t5_3 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/fasso/fasso4.webp')
t5_4 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/fasso/fasso5.png')
t5_5 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/fasso/fasso6.webp')
t5_6 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/fasso/fasso7.webp')

t5.images.attach(io:t5_0, filename: 'table/fasso/fasso1.webp')
t5.images.attach(io:t5_1, filename: 'table/fasso/fasso2.jpeg')
t5.images.attach(io:t5_2, filename: 'table/fasso/fasso3.jpeg')
t5.images.attach(io:t5_3, filename: 'table/fasso/fasso4.webp')
t5.images.attach(io:t5_4, filename: 'table/fasso/fasso5.png')
t5.images.attach(io:t5_5, filename: 'table/fasso/fasso6.webp')
t5.images.attach(io:t5_6, filename: 'table/fasso/fasso7.webp')


t6 = Furniture.create({name: "Chloe Coffee Table", 
  description: "Cute as a solid oak button. Chloe’s smooth finish is juxtaposed with chunky proportions, a teardrop-shaped leg, and a gently hammered top for good measure.
",
  highlight:"
Material: 100% American Red Oak
Build: All wood selected, cut, laminated, assembled, sanded, and hammered by hand.
Finish: Gently hand-hammered and treated with a top coat for seal.
Detail: Since each table is handmade and hand-hammered, variations, imperfections, and subtle dimples are sort of the whole idea. No two pieces are exactly alike.
Assembly: Simple assembly required.
",
  dimension: 'Overall dimensions: 31\”L x 31\”W x 16\”H
Top thickness: 2.5\”
Weight: 76 lbs
Box dimensions: 35.5\”L x 35.5\”W x 21.25\”H',
 category: "Table", color: "American Red Oak", price: 1699 })

t6_0 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/chloe/chloe1.jpeg')
t6_1 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/chloe/chloe2.webp')
t6_2 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/chloe/chloe3.png')
t6_3 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/chloe/chloe4.jpeg')
t6_4 = open('https://twentywon-images.s3.us-east-2.amazonaws.com/table/chloe/chloe5.webp')

t6.images.attach(io:t6_0, filename: 'table/chloe/chloe1.jpeg')
t6.images.attach(io:t6_1, filename: 'table/chloe/chloe2.webp')
t6.images.attach(io:t6_2, filename: 'table/chloe/chloe3.png')
t6.images.attach(io:t6_3, filename: 'table/chloe/chloe4.jpeg')
t6.images.attach(io:t6_4, filename: 'table/chloe/chloe5.webp')
