package com.link.shorten.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * The Class Link.
 */
@Entity
public class Link {
	
	/** The id. */
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	/** The long link. */
	private String longLink;
	
	/** The short link key. */
	private String shortLinkKey;
	
	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	public int getId() {
		return id;
	}
	
	/**
	 * Sets the id.
	 *
	 * @param id the new id
	 */
	public void setId(int id) {
		this.id = id;
	}
	
	/**
	 * Gets the long link.
	 *
	 * @return the long link
	 */
	public String getLongLink() {
		return longLink;
	}
	
	/**
	 * Sets the long link.
	 *
	 * @param longLink the new long link
	 */
	public void setLongLink(String longLink) {
		this.longLink = longLink;
	}
	
	/**
	 * Gets the short link key.
	 *
	 * @return the short link key
	 */
	public String getShortLinkKey() {
		return shortLinkKey;
	}
	
	/**
	 * Sets the short link hash.
	 *
	 * @param shortLinkKey the new short link hash
	 */
	public void setShortLinkHash(String shortLinkKey) {
		this.shortLinkKey = shortLinkKey;
	}
	
	/**
	 * Instantiates a new link.
	 *
	 * @param longLink the long link
	 * @param shortLinkKey the short link key
	 */
	public Link(String longLink, String shortLinkKey) {
		super();
		this.longLink = longLink;
		this.shortLinkKey = shortLinkKey;
	}
	
	/**
	 * Instantiates a new link.
	 */
	public Link() {
		super();
	}
	
}
