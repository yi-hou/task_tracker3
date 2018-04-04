# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TaskTracker3.Repo.insert!(%TaskTracker3.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias TaskTracker3.Repo
  alias TaskTracker3.Users.User
  alias TaskTracker3.Tasks.Task

  def run do
    p = Comeonin.Argon2.hashpwsalt("password1")

    Repo.delete_all(User)
    a = Repo.insert!(%User{ name: "Lee", email: "lee@gmail.com", password_hash: p })
    b = Repo.insert!(%User{ name: "yi", email: "yi@gmail.com", password_hash: p })
    c = Repo.insert!(%User{ name: "alice", email: "alice@gmail.com", password_hash: p })
    d = Repo.insert!(%User{ name: "carol", email: "carol@gmail.com", password_hash: p })

    Repo.delete_all(Task)
    Repo.insert!(%Task{ user_id: a.id, title: "web-hw01", description: "build website for hw01", time: 0, completed: false })
    Repo.insert!(%Task{ user_id: b.id, title: "web-hw02", description: "build website for hw02", time: 15, completed: false })
    Repo.insert!(%Task{ user_id: c.id, title: "web-hw03", description: "build website for hw03", time: 30, completed: true })
    Repo.insert!(%Task{ user_id: d.id, title: "web-hw04", description: "build website for hw04", time: 45, completed: true })
    Repo.insert!(%Task{ user_id: a.id, title: "web-hw05", description: "build website for hw05", time: 60, completed: false })
 end
end

Seeds.run
