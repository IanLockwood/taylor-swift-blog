class AddSlugsToBlogPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :blog_posts, :slug, :string, unique: true
  end
end
