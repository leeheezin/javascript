let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG')

gsap.set('svg', {
	visibility: 'visible'
})
let getRandomRotation = gsap.utils.random(-3, 3, 0.1, true);
let getRandomWiggle = gsap.utils.random(9, 13, 1, true);

gsap.registerPlugin(MorphSVGPlugin);
MorphSVGPlugin.convertToPath('polygon');
gsap.set('.wholePos', {
	x: -600
})
const wiggleEase = CustomWiggle.create("Wiggle.easeOut", {wiggles:3, type:"easeOut"});
function wobble1 () {
	
	gsap.to('#X, #T, #E2Short, #N', {
		rotation: getRandomRotation,
		stagger: {
			each: 0
		},
		transformOrigin: '50% 100%',
		ease: wiggleEase
	})
}
const ease = CustomEase.create("custom", "M0,0 C0.01,0.244 0.1,0.46 0.346,0.618 0.567,0.76 0.87,0.641 1,1");

function wobble2 () {
	
	gsap.to('#X, #T, #E2Short, #N, #D1Long, #E3', {
		rotation: getRandomRotation,
		stagger: {
			each: 0
		},
		transformOrigin: '50% 100%',
		ease: wiggleEase
	})
}
function wobble3 () {
	
	gsap.to('#X, #T, #E2Short, #N, #D2Short, #E3', {
		rotation: getRandomRotation,
		stagger: {
			each: 0
		},
		transformOrigin: '50% 100%',
		ease: wiggleEase
	})
}
function wobble4 () {
	
	gsap.to('#E1Short, #X, #T, #E2Short, #N, #D2Short, #E3', {
		rotation: getRandomRotation,
		stagger: {
			each: 0
		},
		transformOrigin: '50% 100%',
		ease: wiggleEase
	})
}
let tl = gsap.timeline({repeat: -1, defaults: {
	ease: ease,
	duration: 1
}});
tl.to('#E1Short', {
	morphSVG: {
		shape: '#E1Long'
	},
	x: -300
})
.add('jump1')
.call(wobble1)
.to('#E1Short', {
	morphSVG: {
		shape: '#E1ShortReset'
	}
}, 'jump1')
.to('#X, #T, #E2Short, #N, #D1Short, #E3, #D2Short, #D1Long', {
	x: -300
},'jump1')
.add('jump2')
.call(wobble1)
.to('#D1Long', {
	morphSVG: {
		shape: '#D1Short'
	}
}, 'jump2')
.to('#E3, #D2Short', {
	x: -600
},'jump2')
.to('#D2Short', {
	morphSVG: {
		shape: '#D2Long'
	}
}, 'jump2')
.add('jump3')
.call(wobble2)
.to('#D2Short', {
	morphSVG: {
		shape: '#D2ShortReset'
	}
}, 'jump3')
.to('#E1Short', {
	morphSVG: {
		shape: '#E1Long'
	},
	x: -600
}, 'jump3')
.add('jump4')
.call(wobble3)
.to('#E1Short', {
	morphSVG: {
		shape: '#E1ShortReset'
	},
	x: -600
}, 'jump4')
.to('#X, #T, #E2Short, #N, #D1Short, #E3, #D2Short, #D1Long', {
	x: -600
},'jump4')
.to('#D1Long', {
	morphSVG: {
		shape: '#D1LongReset'//,
		//shapeIndex: 9
	}
}, 'jump4')
.add('jump5')
.call(wobble4)
.to('#E3, #D2Short', {
	x: -900
},'jump5')
.to('#D1Long', {
	morphSVG: {
		shape: '#D1Short'
	}
}, 'jump5')
.add('jump6')
.call(wobble3)
.to('#E1Short, #X, #T, #E2Short, #N, #D1Long', {
	x: -900
}, 'jump6')
.to('#D1Long', {
	morphSVG: {
		shape: '#D1LongReset'
	}
}, 'jump6')
.call(wobble3)
.to('.whole', {
	duration: 3.5 * 2,
	x: 900,
	ease: 'linear'
}, 0)
//gsap.globalTimeline.timeScale(0.2)
//ScrubGSAPTimeline(tl)