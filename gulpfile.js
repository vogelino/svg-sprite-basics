var gulp = require('gulp');
var spriteSvg = require('gulp-svg-sprite');

const paths = {
	src: {
		icons: './src/icons/**/*.svg'
	},
	dist: {
		icons: './dist/icons'
	}
};

gulp.task('svg-sprite', () => gulp
	.src(paths.src.icons)
	.pipe(spriteSvg({
		mode: {
			symbol: {
				sprite: 'svgIcons.svg',
				dest: ''
			}
		}
	}))
	.pipe(gulp.dest(paths.dist.icons))
);

gulp.task('default', [ 'svg-sprite' ]);
