---
title: Docker tricks
---

På Synology DSM brug 

´´´ -v $(sudo docker info --format '{{.DockerRootDir}}')/volumes ´´´

(fra https://www.synoforum.com/resources/a-portainer-agent-primer.171/)