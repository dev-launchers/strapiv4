client {
  enabled = true

  options {
    # Use Docker via Windows named pipe
    "driver.docker.endpoint" = "npipe:////./pipe/docker_engine"

    # Disable raw_exec (not supported on Windows)
    "driver.raw_exec.enable" = "0"
  }
}
