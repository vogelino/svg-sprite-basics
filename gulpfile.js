var gulp = require('gulp');
var spriteSvg = require('gulp-svg-sprite');
var browserSync = require('browser-sync').create();

const paths = {
	src: {
		icons: './src/icons/**/*.svg'
	},
	dist: {
		base: './dist',
		icons: './dist/icons'
	}
};

gulp.task('serve', [ 'svg-sprite' ], () => {
	browserSync.init({
		server: {
			baseDir: paths.dist.base
		}
	});

	gulp.watch(paths.src.icons, [ 'svg-sprite' ]);
	gulp.watch(`${paths.dist.base}/**/*`).on('change', browserSync.reload);
});

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
	.pipe(browserSync.stream())
);

gulp.task('default', [ 'serve' ]);
