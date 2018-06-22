class AddTagArrayToBlogPosts < ActiveRecord::Migration[5.0]
  def change
    remove_column :blog_posts, :tags
    add_column :blog_posts, :tags, :string
  end
end
