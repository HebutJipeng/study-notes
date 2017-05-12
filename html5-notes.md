## html5 中 video 标签的属性
	autoplay  autoplay
	controls  controls
	preload   preload
	height	  pixels
	width 	  pixels
	loop	  loop
	src 	  url
	
	
    移动端HTML5<video>视频播放优化实践 http://www.xuanfengge.com/html5-video-play.html

> 今天在项目中遇到 播放器(h5/flash), 在iphone手机上播放流媒体(hls/rtmp)，时直接会全屏，要不就无法播放。这个问题困扰了我一天，起初解决问题的思路，认为可能是播放器的问题,更换了若干的播放器，都无济于事，最后参考了 花椒直播 的落地页，发现了根源在于 是某些属性阻止了播放器全屏，尝试过后果然如此。

	在<video>中 加入属性 webkit-playsinline ，如<video id="player" webkit-playsinline>

	我看花椒 还加了x-webkit-airplay="true"  这个属性

	<code>
		<video autoplay="" webkit-playsinline="true" x-webkit-airplay="true" x5-video-player-type="h5" playsinline="true" preload="auto" id="my_video_1" class="video-js vjs-default-skin" preload="auto" data-setup='{}'>
            <source src="http://pili-live-rtmp.streamqn.moka.vc/mokastream/5b2ebe388f239f2287970e8d7004d7da.m3u8" type="application/x-mpegURL">
        </video>
	</code>

	以上的代码就可以完成在移动端web页面中镶嵌播放器的功能了，而且不会自动最大化，:) 开心

	
	补: 以上这个方式似乎只能满足iphone上的微信对于不最大化的情况下播放视频这个需求，对于安卓 我现在还是束手无策。
	参考花椒的做法，是自己重写一个flash播放器？？？这种形式让我自己都开始怀疑自己了。。。

2. 关于img 标签不改变src的情况下，刷新问题
	本来准备在不改变src的情况下，通过不断给src置空，然后赋值来完成这个功能。后来发现，当src不变的时候，浏览器会直接读取缓存。图片不会更换。
	临时解决方法： 给请求名 + Math.random(); 
	这个还是会重新创建很多的新的图片，解决方式并不好。
