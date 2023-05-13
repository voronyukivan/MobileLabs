import * as React from  'react';
import {View, Text, Image, FlatList} from "react-native";
import styled from 'styled-components/native';

const News_container=styled.View`
  display: flex;
  flex-direction: row;
  height: 110px;
  width: 100%;
  background-color: white;
  margin-left: 20px;
  margin-bottom: 10px;
`;
const  News_description=styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Img_container=styled.View`
  height: 100%;
  width: 110px;
  background-color: darkred;
`;
export default  function MainScreen({navigation}){
    const news=[
        {
            id:1,
            header:'Astro photo 1',
            data:'22.12.11',
            short_description:'M81 and M82',
            news_image: {uri:'https://science.nasa.gov/files/styles/image_gallery_scale_960w/public/atoms/M81-82_1024.jpg?itok=zxP8SXYz'},
        },
        {
            id:2,
            header:'Astro photo 2',
            data:'22.12.10',
            short_description:'Orion Nebula',
            news_image: {uri:'https://astrobackyard.com/wp-content/uploads/2022/11/orion-nebula-information.jpg'}
        },
        {
            id:3,
            header:'Astro photo 3',
            data:'24.12.13',
            short_description:'Triangulum galaxy',
            news_image: {uri:'https://astronomy.com/-/media/Images/Magazine%20Articles/2022/01/24TriangulumGalaxy.jpg?mw=600'}
        },
        {
            id:4,
            header:'Astro photo 4',
            data:'22.12.14',
            short_description:'Whale galaxy',
            news_image: {uri:"https://science.nasa.gov/files/styles/image_gallery_scale_960w/public/atoms/ngc4631_sherick1024.jpg?itok=BmcIXQ2G"}
        },
        {
            id:5,
            header:'Astro photo 5',
            data:'12.12.15',
            short_description:'Whirlpool galaxy',
            news_image: {uri:"https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/m51-and-companion_0.jpg?itok=OPfxPWWf"}
        },
    ];
    const news_item=({item})=>(
        <View style={{flex: 1, alignItems:"center", justifyContent:"center"}}>
            <News_container>
                <Img_container>
                    <Image source={item.news_image} style={{width:"100%", height:"100%"}}/>
                </Img_container>
                <News_description>
                    <Text style={{fontWeight:"bold", fontSize:20}}>{item.header}</Text>
                    <Text style={{color:"lightgrey", fontSize:16}}>{item.data}</Text>
                    <Text>{item.short_description}</Text>
                </News_description>
            </News_container>
        </View>
    )
    return(
        <FlatList data={news} renderItem={news_item}/>
    );
}