class CreateBlogPosts < ActiveRecord::Migration[5.0]
  def change
    create_table :blog_posts do |t|

      t.string :title
      t.string :author
      t.text :tags, array: true, default: []
      t.text :content

      t.timestamps
    end
  end
end
