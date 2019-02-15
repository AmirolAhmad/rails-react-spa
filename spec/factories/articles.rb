FactoryBot.define do
  factory :article do
    user { nil }
    title { "MyString" }
    description { "MyText" }
  end
end
