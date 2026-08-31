job "metabase" {
  datacenters = ["dc1"]
  type = "service"

  group "metabase-group" {
    count = 1

    network {
      port "http" {
        static = 3000
      }
    }

    task "metabase" {
      driver = "docker"

      config {
        image = "metabase/metabase:latest"
        ports = ["http"]
      }

      resources {
        cpu    = 500
        memory = 1024
      }

      env {
        MB_JETTY_PORT = "3000"
      }
    }

    service {
      provider = "nomad"
      name = "metabase"
      port = "http"
    }
  }
}
