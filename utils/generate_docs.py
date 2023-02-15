import pygame
import shutil
import os
import datetime
import github
from github import Github

if "__main__" == __name__:
    github_token = os.getenv("INPUT_GH_TOKEN")
    github_client = Github(github_token)
    repository = github_client.get_repo("pygame-community/pyga.me")
    
    docs_path = os.path.join(os.path.dirname(pygame.__file__), "docs", "generated")
    if os.path.exists(os.path.join("public", "docs")):
        shutil.rmtree(os.path.join("public", "docs"))

    shutil.copytree(docs_path, os.path.join("public", "docs"))
