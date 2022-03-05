import React,{userState,userEffect} from "react";
import { 
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard 
} from "react-native";

export default function App(){
  const[offset] = userState(new Animated.ValueXY({x:0,y:95}));
  const[opacity] = userState(new Animated.Value(0));
  const [logo] = userState(new Animated.ValueXY({x:130,y:155}));

    userEffect(()=>{
      KeyboardDidShowListener =Keyboard.addListener('keybordDidShow',KeyboardDidShow);
      KeyboardDidHideListener =Keyboard.addListener('keybordDidHide',keybordDidHide);

      Animated.parallel([
        Animated.spring(offset.y,{
          toValue:0,
          speed:4,
          bounciness:20
        }),
        Animated.timing(opacity,{
          toValue:1,
          duration:200,
        })  
      ]).start();
      
    },[]);

    function keybordDidShow(){
      Animated.parallel([
        Animated.timing(logo.x,{
          toValue:55,
          duration:100,
        }),
        Animated.timing(logo.y,{
          toValue:65,
          duration:100,
        }),
      ]).start();
    }

    function keybordDidHide(){
      Animated.parallel([
        Animated.timing(logo.x,{
          toValue:130,
          duration:100,
        }),
        Animated.timing(logo.y,{
          toValue:155,
          duration:100,
        }),
      ]).start();
    }

  return(
    <KeyboardAvoidingView style ={style.backgroud} >
      <View style={style.containerLogo}>
        <Animated.Image style={{
          width:.x,
          height:.y,
        }}
          source={require('./assets/images,Imagem-de-Homem-Aranha-PNG-824x1024')}
        />
      </View>
      <Animated.View style = {[style.container,
        {
          opacity: opacity,
          transform:[
            {translateY:offset.y}
          ]
        }
      ]}>
        <TextInput style={style.Input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=>{}}
        />
        <TextInput style={style.Input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=>{}}
        />
        <TouchableOpacity style={style.btnSubmit}>
          <Text style={style.btnSubmitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnRegiste}>
          <Text style={style.RegisteText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  )
}

const style =StyleSheet.create({
  backgroud:{
    flex : 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#000',
  },
  containerLogo:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50,
  },
  input:{
    backgroundColor:'#1919',
    width: '90%',
    marginBottom:15,
    color:'#000',
    fontSize:17,
    borderRadius:7,
    padding:10,
  },
  btnSubmit:{
    backgroudColor:'#35A',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
  },
  btnSubmitText:{
    color:'#fff',
    fontSize:18,
  },
  btnRegiste:{
    marginTop: 10,
  },
  RegisteText:{
    color:'import React,{userState,userEffect} from "react";
import { 
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard 
} from "react-native";

export default function App(){
  const[offset] = userState(new Animated.ValueXY({x:0,y:95}));
  const[opacity] = userState(new Animated.Value(0));
  const [logo] = userState(new Animated.ValueXY({x:130,y:155}));

    userEffect(()=>{
      KeyboardDidShowListener =Keyboard.addListener('keybordDidShow',KeyboardDidShow);
      KeyboardDidHideListener =Keyboard.addListener('keybordDidHide',keybordDidHide);

      Animated.parallel([
        Animated.spring(offset.y,{
          toValue:0,
          speed:4,
          bounciness:20
        }),
        Animated.timing(opacity,{
          toValue:1,
          duration:200,
        })  
      ]).start();
      
    },[]);

    function keybordDidShow(){
      Animated.parallel([
        Animated.timing(logo.x,{
          toValue:55,
          duration:100,
        }),
        Animated.timing(logo.y,{
          toValue:65,
          duration:100,
        }),
      ]).start();
    }

    function keybordDidHide(){
      Animated.parallel([
        Animated.timing(logo.x,{
          toValue:130,
          duration:100,
        }),
        Animated.timing(logo.y,{
          toValue:155,
          duration:100,
        }),
      ]).start();
    }

  return(
    <KeyboardAvoidingView style ={style.backgroud} >
      <View style={style.containerLogo}>
        <Animated.Image style={{
          width:logo.x,
          height:logo.y,
        }}
          source={require('./assets/logo')}
        />
      </View>
      <Animated.View style = {[style.container,
        {
          opacity: opacity,
          transform:[
            {translateY:offset.y}
          ]
        }
      ]}>
        <TextInput style={style.Input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=>{}}
        />
        <TextInput style={style.Input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=>{}}
        />
        <TouchableOpacity style={style.btnSubmit}>
          <Text style={style.btnSubmitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnRegiste}>
          <Text style={style.RegisteText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  )
}

const style =StyleSheet.create({
  backgroud:{
    flex : 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#1919',
  },
  containerLogo:{
    flex:1,
    justifyContent:'center',
  },
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50,
  },
  input:{
    backgroundColor:'#000',
    width: '90%',
    marginBottom:15,
    color:'#fff',
    fontSize:22,
    borderRadius:7,
    padding:10,
  },
  btnSubmit:{
    backgroudColor:'#35A',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
  },
  btnSubmitText:{
    color:'#fff',
    fontSize:20,
  },
  btnRegiste:{
    marginTop: 10,
  },
  RegisteText:{
    color:'#BD08A2'
  }
})'
  }
}