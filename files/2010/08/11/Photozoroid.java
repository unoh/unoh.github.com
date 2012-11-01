package jp.co.unoh.photozoroid;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class Photozoroid extends Activity {

		/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {

		super.onCreate(savedInstanceState);
		setContentView(R.layout.main);

		String[] tags = { "girl", "blue", "food", "flower" };
		ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
				android.R.layout.simple_list_item_1, tags);

		ListView listView = (ListView) findViewById(R.id.ListView01);
		listView.setAdapter(adapter);
		listView.setSelection(1);
		listView.setTextFilterEnabled(true);

		listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
			@Override
			public void onItemClick(AdapterView<?> parent, View view,
					int position, long id) {
				ListView listView = (ListView) parent;
				String searchKeyWord = (String) listView
						.getItemAtPosition(position);
				Intent intent = new Intent(Photozoroid.this, PhotozoViewer.class);
				intent.putExtra("searchKeyWord", searchKeyWord);
		        intent.setAction(Intent.ACTION_VIEW);
		        startActivity(intent);
		        finish();
			}
		});
 	}
}