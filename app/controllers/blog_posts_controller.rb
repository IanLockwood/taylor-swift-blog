class BlogPostsController < ApplicationController
  def show
    @blog_post = BlogPost.find(params[:id])
    @content = ActionController::Base.helpers.sanitize(@blog_post.content)
  end
end
