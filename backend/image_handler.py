from io import BytesIO
import base64
from PIL import Image
import os
import re

def remove_prefix(base64_encoded_string: str) -> str:
    pattern = r'^data:image/png;base64,'
    shortened_encoded_string = re.sub(pattern, '', base64_encoded_string)
    return shortened_encoded_string

# encode the file based on the images within the file path
def encode(folder_path: str, image_filename: str) -> str:
    absolute_path = os.path.join(folder_path, image_filename)
    with open(absolute_path, 'rb') as image_file: 
        base64_bytes = base64.b64encode(image_file.read())
        base64_string = base64_bytes.decode('utf-8') 
        shortened_encoded_string = remove_prefix(base64_string)
        return shortened_encoded_string
        # return base64_bytes

# file path to encode
def encode_file(uuid: str) -> list: 
    try: 
        encode_list = []
        file_path = f"output/exp_{uuid}/predict"
        image_list = os.listdir(file_path)
        for image in image_list:
            base64_bytes = encode(folder_path=file_path, image_filename=image)
            encode_list.append(base64_bytes)
        return encode_list
    except Exception as e: 
        print(e)


# after receiving from the frontend
def decode(encoded_string: str, folder_path: str, index: int):
    # need to remove this: 
    # data:image/png;base64,
    try: 
        file_path = os.path.join(folder_path, f"image_{index + 1}.png")
        im = Image.open(BytesIO(base64.b64decode(encoded_string)))
        im.save(file_path, 'PNG')
    except: 
        raise ValueError
    
# decode all the strings in that file 
def decode_file(encoded_string_list: list, uuid: str):
    try:
        indiv_folder_path = f"input/{uuid}"
        if not os.path.exists(indiv_folder_path):
            os.makedirs(indiv_folder_path)
        else: 
            return
        # print(len(encoded_string_list))
        for i, encoded_string in enumerate(encoded_string_list):
            # this is used to remvove the prefix
            shortened_encoded_string = remove_prefix(encoded_string)
            decode(encoded_string=shortened_encoded_string, folder_path=indiv_folder_path, index=i)
    except Exception as e:
        print(e)