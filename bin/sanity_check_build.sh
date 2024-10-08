#!/bin/sh
set -e

get_build_info() {
  drone build info $GIT_REPO $DRONE_BUILD_PARENT --format $1 || { echo "Failed to fetch build info"; exit 1; }
}

export STATUS=$(get_build_info {{.Status}})
export BRANCH=$(get_build_info {{.Target}})
export EVENT=$(get_build_info {{.Event}})
export REFS=$(get_build_info {{.Ref}})

if [[ "$STATUS" != "success" ]]; then
  echo "Build number $DRONE_BUILD_PARENT failed due to unsuccessful status."
  exit 1
fi

if [[ "$BRANCH" != "master" ]]; then
  echo "Build number $DRONE_BUILD_PARENT failed because it's not on the master branch."
  exit 1
fi

if [[ "$EVENT" != "push" ]]; then
  echo "Build number $DRONE_BUILD_PARENT failed because the event is not a push."
  exit 1
fi

if [[ "$REFS" != "refs/heads/master" ]]; then
  echo "Build number $DRONE_BUILD_PARENT failed because the reference is not refs/heads/master."
  exit 1
fi

echo "Build number $DRONE_BUILD_PARENT passed sanity check. Ready to deploy to PROD!."
