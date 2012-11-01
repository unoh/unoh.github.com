package jp.co.unoh.photozoroid;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.xmlpull.v1.XmlPullParser;
import org.xmlpull.v1.XmlPullParserException;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.util.Log;
import android.util.Xml;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.GridView;
import android.widget.ImageView;

public class PhotozoViewer extends Activity {

	private static final String LogTag = "PhotozoViewer:";

	@Override
	public void onCreate(Bundle savedInstanceState) {
		GridView gridview = null;

		super.onCreate(savedInstanceState);
		setContentView(R.layout.photozoviewer);

		Intent intent = getIntent();
		String searchKeyWord = (String) intent
				.getSerializableExtra("searchKeyWord");
		try {
			final List<String> urlList = getPhotozoData(searchKeyWord);
			gridview = (GridView) findViewById(R.id.photogrid01);
			gridview.setAdapter(new ImageAdapter(this, urlList));
		} catch (Exception e) {
			Log.v(LogTag, e.toString());
		}
	}

	public List<String> getPhotozoData(String searchKeyWord)
			throws IOException, XmlPullParserException {

		String urlString = "http://api.photozou.jp/rest/search_public&type=photo&limit=10&keyword="
				+ searchKeyWord;
		List<String> list = new ArrayList<String>();

		URL url = new URL(urlString);
		HttpURLConnection urlconn = (HttpURLConnection) url.openConnection();
		urlconn.setRequestMethod("GET");
		urlconn.setInstanceFollowRedirects(false);
		urlconn.setRequestProperty("Accept-Language", "ja;q=0.7,en;q=0.3");
		urlconn.connect();

		final XmlPullParser parser = Xml.newPullParser();
		parser.setInput(new InputStreamReader(urlconn.getInputStream()));
		int type;
		String s;
		while ((type = parser.next()) != XmlPullParser.END_DOCUMENT) {
			if (type == XmlPullParser.START_TAG
					&& "thumbnail_image_url".equals(parser.getName())) {
				parser.next();
				if ((s = parser.getText()) != null && !"".equals(s))
					list.add(s);
			}
		}
		urlconn.disconnect();
		return list;
	}

	class ImageAdapter extends BaseAdapter {
		private Context context;
		private Bitmap[] photos;

		public ImageAdapter(Context c, List<String> urlList) throws Exception {
			context = c;
			photos = new Bitmap[urlList.size()];
			for (int i = 0; i < urlList.size(); i++) {
				HttpURLConnection connection = (HttpURLConnection)new URL(urlList.get(i)) .openConnection();
				connection.connect();
				InputStream input = connection.getInputStream();
				photos[i] = BitmapFactory.decodeStream(input);
			}
		}

		public int getCount() {
			return photos.length;
		}

		public Object getItem(int position) {
			return position;
		}

		public long getItemId(int position) {
			return position;
		}

		public View getView(int position, View convertView, ViewGroup parent) {
			ImageView imageView;
			if (convertView == null) {
				imageView = new ImageView(context);
				imageView.setLayoutParams(new GridView.LayoutParams(75, 75));
				imageView.setAdjustViewBounds(false);
				imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
				imageView.setPadding(2, 2, 2, 2);
			} else {
				imageView = (ImageView) convertView;
			}
			imageView.setImageBitmap(photos[position]);
			return imageView;
		}
	}
}