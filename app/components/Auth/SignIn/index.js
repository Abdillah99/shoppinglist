import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableNativeFeedback,TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import styles, {color} from './style';

export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View style={styles.container}>

				<View style={styles.formContainer}>
					<TextInput style={styles.textInput} placeholder="Email" underlineColorAndroid="#000" />
					<TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} underlineColorAndroid="#000" />

				</View>

				<View style={ styles.btnContainer }>

					<View style={styles.btnSignUpContainer}>

						<Text style={styles.signUpLabel}>Sign In</Text>

						<TouchableOpacity style={styles.btnSignUp}>

							<Image style={styles.btnIcon} source={require('../../../assets/icon/next.png')} />
					
						</TouchableOpacity>

					</View>

					<View style={styles.btnAppleIdContainer}>
						<Text>Forgot password?</Text>

						<TouchableNativeFeedback>
							<View style={styles.btnApple}>
								<Text> Sign in with apple id</Text>
							</View>
						</TouchableNativeFeedback>
					
					</View>

				</View>

			</View>
		);
	}
}
