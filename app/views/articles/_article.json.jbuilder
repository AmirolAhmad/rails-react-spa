json.extract! article, :id, :title, :description
json.author do
  json.email article.user.email
end
json.url article_url(article, format: :json)
