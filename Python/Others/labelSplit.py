import os
def main():
    
    lbl_dict = {
    'n01440764':'tench',
    'n02102040':'English springer',
    'n02979186':'cassette player',
    'n03000684':'chain saw',
    'n03028079':'church',
    'n03394916':'French horn',
    'n03417042':'garbage truck',
    'n03425413':'gas pump',
    'n03445777':'golf ball',
    'n03888257':'parachute'
    }
    
    path = "Absolute Path" #for example --> F:\Data Structures\Python\Others\train
    directory_list = os.listdir(path)
    for folder in directory_list:
        if folder in lbl_dict.keys():
            os.rename(os.path.join(path, folder), os.path.join(path, lbl_dict.get(folder)))

# Driver Code
if __name__ == '__main__':
    main()