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
