require 'rails_helper'

RSpec.describe "articles/edit", type: :view do
  before(:each) do
    @article = assign(:article, Article.create!(
      :user => nil,
      :title => "MyString",
      :description => "MyText"
    ))
  end

  it "renders the edit article form" do
    render

    assert_select "form[action=?][method=?]", article_path(@article), "post" do

      assert_select "input[name=?]", "article[user_id]"

      assert_select "input[name=?]", "article[title]"

      assert_select "textarea[name=?]", "article[description]"
    end
  end
end
