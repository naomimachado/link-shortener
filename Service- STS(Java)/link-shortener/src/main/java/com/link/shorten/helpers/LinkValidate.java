package com.link.shorten.helpers;

import java.net.MalformedURLException;
import java.net.URL;

/**
 * The Class LinkValidate.
 */
public class LinkValidate {
	
	/**
	 * Validates the url string.
	 *
	 * @param url given a URL string
	 * @return true, if successful
	 */
	public boolean validateUrl(String url) {
		boolean valid = false;
		try {
			new URL(url);
			valid = true;
		} catch (MalformedURLException e) {
			valid = false;
		}
		return valid;
	}
	
}
