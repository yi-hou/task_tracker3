#!/bin/bash

export PORT=5101

cd ~/www/tasks3
./bin/task_tracker3 stop || true
./bin/task_tracker3 start

