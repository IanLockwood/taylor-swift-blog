class BlogPostsController < ApplicationController
  def show
    @blog_post = BlogPost.friendly.find(params[:id])
    @content = ActionController::Base.helpers.sanitize(@blog_post.content)
    @blog_post_slugs = BlogPost.pluck(:slug)
  end

  def update
    @blog_post = BlogPost.friendly.find(params[:id])

    respond_to do |format|
      if @blog_post.update(blog_post_params)
        format.js
      end
    end
  end

  def blog_post_params
    params.require(:blog_post).permit(
      :title,
      :slug
    )
  end
end
