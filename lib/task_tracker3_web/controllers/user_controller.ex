defmodule TaskTracker3Web.UserController do
  use TaskTracker3Web, :controller

  alias TaskTracker3.Users
  alias TaskTracker3.Users.User

  action_fallback TaskTracker3Web.FallbackController

  def index(conn, _params) do
    users = Users.list_users()
    render(conn, "index.json", users: users)
  end

  def create(conn, %{"user" => user_params}) do
    with {:ok, %User{} = user} <- Users.create_user(user_params) do
      token = Phoenix.Token.sign(conn, "auth token", user.id)
      conn
      |> put_status(:created)

      |> render("token.json", user: user, token: token)
    end
  end

  def show(conn, %{"id" => id}) do
    user = Users.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Users.get_user!(id)

    with {:ok, %User{} = user} <- Users.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Users.get_user!(id)
    with {:ok, %User{}} <- Users.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end
end
