import * as React from  'react';
import {View, Text, TouchableOpacity, Image, Dimensions,ScrollView} from "react-native";
import Gallery_images from "../Gallery_images";
export default function GalleryScreen({navigation}){
    let devHeight=Dimensions.get('window').height;
    let devWidth=Dimensions.get('window').width;
    return(
        <ScrollView>
            <View style={{flex: 1,flexDirection:"row", flexWrap:"wrap"}}>
                {
                    Gallery_images.map((image, index)=>(
                        <TouchableOpacity key={index} onPress={()=>{}} style={{ borderRadius:5}}>
                            <Image source={image} style={{height:devHeight/6.45, width:(devWidth/2)-4,borderRadius:10,margin:2}}/>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    );
}