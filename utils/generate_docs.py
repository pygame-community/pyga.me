__author__ = "Andrew Hong"
"""utils/generate_docs.py
This file is __not__ meant to be used by a human. This was created
to automate the process of downloading, cloning, and deploying the
pygame documentation to the main website using  GitHub Actions. If
you managed to run this very file, please discard your changes and
do not do it again.
"""
import pygame
import shutil
import os


if "__main__" == __name__:
    target_directory = os.path.join("public", "docs")
    docs_path = os.path.join(os.path.dirname(pygame.__file__), "docs", "generated")
    print(f"Found these files: {os.listdir(docs_path)}")
    if os.path.exists(target_directory):
        print("public/docs exists found, deleting.")
        shutil.rmtree(target_directory)

    print("Copying documentation to public/docs")
    shutil.copytree(docs_path, target_directory)
    print(f"Copied! {os.listdir(target_directory)}")
