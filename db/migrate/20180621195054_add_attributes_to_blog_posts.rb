class AddAttributesToBlogPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :blog_posts, :title, :string
    add_column :blog_posts, :author, :string
    add_column :blog_posts, :tags, :string, array: true, default: [].to_yaml
    add_column :blog_posts, :content, :text
  end
end
