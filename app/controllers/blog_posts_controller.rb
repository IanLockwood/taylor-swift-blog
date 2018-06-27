class BlogPostsController < ApplicationController
  def show
    @blog_post = BlogPost.friendly.find(params[:id])
    @content = ActionController::Base.helpers.sanitize(@blog_post.content)
    @blog_post_slugs = BlogPost.pluck(:slug) #array of used blog post slugs
  end

  def update
    @blog_post = BlogPost.friendly.find(params[:id])

    respond_to do |format|
      if @blog_post.update(blog_post_params)
        blog_post_slugs = BlogPost.pluck(:slug)
        render json: blog_post_slugs
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
