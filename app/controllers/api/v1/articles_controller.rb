class Api::V1::ArticlesController < ApiController

  def index
    @articles = Article.all
    render 'articles/index.json.jbuilder'
  end

  def show
    @article = Article.find(params[:id])
    render 'articles/show.json.jbuilder'
  end

end