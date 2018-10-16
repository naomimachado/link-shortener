package com.link.shorten.helpers;

import java.util.Random;

/**
 * The Class LinkKey.
 */
public class LinkKey {
	
	/** The Constant alphaNums. */
	private static final String alphaNums = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
	/**
	 * Generates a key of length 3-12 from alphaNums using Random Class from java.
	 *
	 * @return the key
	 */
	public String getKey() {

		Random random = new Random();
		int keySize = random.nextInt(12 - 3) + 3;
		String key = new String();
		
		while(keySize >= 0) {
			key += alphaNums.charAt(random.nextInt(alphaNums.length()));
			keySize--;
		}
		
		return key;
	}
}
