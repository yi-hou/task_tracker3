defmodule TaskTracker3Web.UserView do
  use TaskTracker3Web, :view
  alias TaskTracker3Web.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      name: user.name,
      email: user.email}
  end

  def render("token.json", %{user: user, token: token}) do
    %{
      user_id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    }
  end
end
