class AddLocationToBlogPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :blog_posts, :location, :string
  end
end
