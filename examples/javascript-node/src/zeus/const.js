/* eslint-disable */

export const AllTypesProps = {
	Card:{
		attack:{
			cardID:{
				type:"String",
				array:true,
				arrayRequired:true,
				required:true
			}
		}
	},
	SpecialSkills: "enum",
	Mutation:{
		addCard:{
			card:{
				type:"createCard",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	Query:{
		cardById:{
			cardId:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	createCard:{
		Defense:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		},
		skills:{
			type:"SpecialSkills",
			array:true,
			arrayRequired:false,
			required:true
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:true
		},
		Children:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		Attack:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:true
		}
	}
}

export const ReturnTypes = {
	Nameable:{
		"...on SpecialCard": "SpecialCard",
		"...on Card": "Card",
		"...on CardStack": "CardStack",
		"...on EffectCard": "EffectCard",
		name:"String"
	},
	SpecialCard:{
		effect:"String",
		name:"String"
	},
	S3Object:{
		bucket:"String",
		key:"String",
		region:"String"
	},
	Card:{
		Attack:"Int",
		Children:"Int",
		Defense:"Int",
		attack:"Card",
		cardImage:"S3Object",
		description:"String",
		id:"ID",
		image:"String",
		name:"String",
		skills:"SpecialSkills"
	},
	CardStack:{
		cards:"Card",
		name:"String"
	},
	Mutation:{
		addCard:"Card"
	},
	Subscription:{
		deck:"Card"
	},
	Query:{
		cardById:"Card",
		drawCard:"Card",
		drawChangeCard:"ChangeCard",
		listCards:"Card",
		myStacks:"CardStack",
		nameables:"Nameable"
	},
	ChangeCard:{
		"...on SpecialCard":"SpecialCard",
		"...on EffectCard":"EffectCard"
	},
	EffectCard:{
		effectSize:"Float",
		name:"String"
	}
}