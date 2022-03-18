# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create(email: 'six@six.com', first_name: 'sixy', last_name: 'penny', password: "sixpenny")

User.create!(
  email: "user@user.com",
  first_name: "user1",
  last_name: "user1",
  password: "password"
)

User.create!(
  email: "user2@user.com",
  first_name: "user2",
  last_name: "user2",
  password: "password"
)

User.create!(
  email: "user3@user.com",
  first_name: "user3",
  last_name: "user3",
  password: "password"
)

User.create!(
  email: "user4@user.com",
  first_name: "user4",
  last_name: "user4",
  password: "password"
)

User.create!(
  email: "user5@user.com",
  first_name: "user5",
  last_name: "user5",
  password: "password"
)

Furniture.create!(
  name: 'neva sectional sofa',
  category: 'sofa',
  color: 'blue',
  price: 4099,
  description: 'nice love sectional'

)

Furniture.create!(
  name: 'devyn sectional sofa',
  category: 'sofa',
  color: 'grey',
  price: 5299,
  description: 'nice love sectional'

)

Furniture.create!(
  name: 'aria sectional sofa',
  category: 'sofa',
  color: 'cream',
  price: 4749,
  description: 'nice weird sectional'

)

Furniture.create!(
  name: 'neva sectional',
  category: 'sectional',
  color: 'blue',
  price: 4099,
  description: 'nice love sectional'

)

Furniture.create!(
  name: 'neva sectional',
  category: 'sectional',
  color: 'blue',
  price: 4099,
  description: 'nice love sectional'

)
/;;;
Furniture.create!(
  name: 'neva sectional111',
  category: 'sectional',
  color: 'blue',
  price: 4099,
  description: 'nice love sectional'

)

Furniture.create!(
  name: 'neva sectional111',
  category: 'sectional',
  color: 'blue',
  price: 4099,
  description: 'nice love sectional'

)

Furniture.create!(
  name: 'chair2112',
  category: 'chair',
  color: 'blue',
  price: 4099,
  description: 'nice love sectional'

)
Furniture.create!(
  name: 'chair7255',
  category: 'chair',
  color: 'blue',
  price: 4099,
  description: 'nice love sectional'

)

Furniture.create!(
  name: 'table',
  category: 'table',
  color: 'blue',
  price: 4099,
  description: 'nice love sectional'

)